import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FolderIcon, FileIcon } from '../atoms/TreeIcons'
import { calcSubtreeSize } from '../utils/treeUtils'
import { encodePath } from '../utils/pathUtils'
import { formatSize } from '../utils/formatSize'
import type { FolderNode } from '../types/tree'

type Props = {
  node: FolderNode
  path: string
  pathSegments: string[]
}

export function FolderDetails({ node, path, pathSegments }: Props) {
  const { t } = useTranslation()
  const totalSize = calcSubtreeSize(node)

  return (
    <Card>
      <CardHeader>
        <FolderIcon sx={{ fontSize: 28, color: '#f59e0b' }} />
        <HeaderTitle>{node.name}</HeaderTitle>
      </CardHeader>
      <Divider />
      <MetaGroup>
        <MetaRow>
          <MetaLabel>{t('node_path')}</MetaLabel>
          <MetaValue>
            <CodePath>{path}</CodePath>
          </MetaValue>
        </MetaRow>
        <MetaRow>
          <MetaLabel>{t('node_children')}</MetaLabel>
          <MetaValue>
            <CountBadge>{node.children.length}</CountBadge>
          </MetaValue>
        </MetaRow>
        <MetaRow>
          <MetaLabel>{t('node_total_size')}</MetaLabel>
          <MetaValue>
            <SizeBadge>{formatSize(totalSize)}</SizeBadge>
          </MetaValue>
        </MetaRow>
      </MetaGroup>
      {node.children.length > 0 && (
        <>
          <SectionDivider />
          <ChildrenList>
            {node.children.map((child) => {
              const childSegments = [...pathSegments, child.name]
              return (
                <ChildItem key={child.name} to={`/tree/${encodePath(childSegments)}`}>
                  {child.type === 'folder' ? (
                    <FolderIcon sx={{ fontSize: 16, color: '#f59e0b', flexShrink: 0 }} />
                  ) : (
                    <FileIcon sx={{ fontSize: 16, color: '#94a3b8', flexShrink: 0 }} />
                  )}
                  <ChildName>{child.name}</ChildName>
                  {child.type === 'file' && <ChildSize>{formatSize(child.size)}</ChildSize>}
                </ChildItem>
              )
            })}
          </ChildrenList>
        </>
      )}
    </Card>
  )
}

const Card = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  max-width: 640px;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
`

const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  word-break: break-all;
`

const Divider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid #f1f5f9;
`

const SectionDivider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid #f1f5f9;
`

const MetaGroup = styled.dl`
  margin: 0;
  padding: 4px 0;
`

const MetaRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 11px 24px;

  &:not(:last-child) {
    border-bottom: 1px solid #f8fafc;
  }
`

const MetaLabel = styled.dt`
  min-width: 80px;
  font-size: 11px;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
`

const MetaValue = styled.dd`
  margin: 0;
  font-size: 14px;
  color: #0f172a;
`

const CountBadge = styled.span`
  display: inline-block;
  padding: 2px 10px;
  background: #ede9fe;
  color: #7c3aed;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`

const SizeBadge = styled.span`
  display: inline-block;
  padding: 2px 10px;
  background: #f1f5f9;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  font-family: ui-monospace, 'Cascadia Code', monospace;
`

const CodePath = styled.code`
  font-family: ui-monospace, 'Cascadia Code', monospace;
  font-size: 13px;
  color: #6366f1;
  background: #eef2ff;
  padding: 2px 8px;
  border-radius: 5px;
  word-break: break-all;
`

const ChildrenList = styled.div`
  padding: 4px 0;
`

const ChildItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 24px;
  text-decoration: none;
  color: #334155;
  transition: background 0.1s, color 0.1s;

  &:hover {
    background: #f8fafc;
    color: #6366f1;
  }
`

const ChildName = styled.span`
  flex: 1;
  font-size: 13px;
  font-weight: 400;
  color: inherit;
`

const ChildSize = styled.span`
  font-size: 11px;
  color: #94a3b8;
  font-family: ui-monospace, 'Cascadia Code', monospace;
`
