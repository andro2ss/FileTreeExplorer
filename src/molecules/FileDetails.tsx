import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { FileIcon } from '../atoms/TreeIcons'
import { formatSize } from '../utils/formatSize'
import type { FileNode } from '../types/tree'

type Props = {
  node: FileNode
  path: string
}

export function FileDetails({ node, path }: Props) {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader>
        <FileIcon sx={{ fontSize: 28, color: '#94a3b8' }} />
        <HeaderTitle>{node.name}</HeaderTitle>
      </CardHeader>
      <Divider />
      <MetaGroup>
        <MetaRow>
          <MetaLabel>{t('node_name')}</MetaLabel>
          <MetaValue>{node.name}</MetaValue>
        </MetaRow>
        <MetaRow>
          <MetaLabel>{t('node_size')}</MetaLabel>
          <MetaValue>
            <SizeBadge>{formatSize(node.size)}</SizeBadge>
          </MetaValue>
        </MetaRow>
        <MetaRow>
          <MetaLabel>{t('node_path')}</MetaLabel>
          <MetaValue>
            <CodePath>{path}</CodePath>
          </MetaValue>
        </MetaRow>
      </MetaGroup>
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
  word-break: break-all;
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
