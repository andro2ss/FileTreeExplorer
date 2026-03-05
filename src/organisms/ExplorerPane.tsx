import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import type { TreeNode } from '../types/tree'
import { encodePath } from '../utils/pathUtils'
import { formatSize } from '../utils/formatSize'
import { calcSubtreeSize } from '../utils/treeUtils'
import { FileIcon, FolderIcon } from '../atoms/TreeIcons'

type Props = {
  node: TreeNode
  pathSegments: string[]
}

export function ExplorerPane({ node, pathSegments }: Props) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  function handleRowClick(child: TreeNode) {
    navigate(`/tree/${encodePath([...pathSegments, child.name])}`)
  }

  return (
    <Container>
      <AddressBar>
        <AddressFolder aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 4a1 1 0 0 1 1-1h3l1.5 1.5H13a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Z"
              fill="#f59e0b"
              stroke="#d97706"
              strokeWidth="0.75"
            />
          </svg>
        </AddressFolder>
        {pathSegments.map((seg, i) => {
          const isLast = i === pathSegments.length - 1
          const linkTo = `/tree/${encodePath(pathSegments.slice(0, i + 1))}`
          return (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {i > 0 && <Sep aria-hidden="true">›</Sep>}
              {isLast ? (
                <CurrentSeg>{seg}</CurrentSeg>
              ) : (
                <SegLink to={linkTo}>{seg}</SegLink>
              )}
            </span>
          )
        })}
      </AddressBar>

      {node.type === 'folder' ? (
        <>
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <TH style={{ width: '50%' }}>{t('node_name')}</TH>
                  <TH style={{ width: '20%' }}>{t('explorer_type')}</TH>
                  <TH style={{ width: '30%' }}>{t('node_size')}</TH>
                </tr>
              </thead>
              <tbody>
                {node.children.length === 0 ? (
                  <tr>
                    <EmptyTD colSpan={3}>{t('explorer_empty_folder')}</EmptyTD>
                  </tr>
                ) : (
                  node.children.map((child) => (
                    <DataTR key={child.name} onClick={() => handleRowClick(child)}>
                      <TD>
                        <NameCell>
                          {child.type === 'folder' ? (
                            <FolderIcon sx={{ fontSize: 17, color: '#f59e0b', flexShrink: 0 }} />
                          ) : (
                            <FileIcon sx={{ fontSize: 17, color: '#94a3b8', flexShrink: 0 }} />
                          )}
                          <NodeName $isFolder={child.type === 'folder'}>{child.name}</NodeName>
                        </NameCell>
                      </TD>
                      <TD>
                        <TypeBadge $type={child.type}>
                          {child.type === 'folder'
                            ? t('explorer_type_folder')
                            : t('explorer_type_file')}
                        </TypeBadge>
                      </TD>
                      <TD>
                        <SizeText>{formatSize(calcSubtreeSize(child))}</SizeText>
                      </TD>
                    </DataTR>
                  ))
                )}
              </tbody>
            </Table>
          </TableWrapper>

          <StatusBar>
            <StatusItem>{t('explorer_items_count', { count: node.children.length })}</StatusItem>
            <StatusDot />
            <StatusItem>
              {t('node_total_size')}:{' '}
              <strong>{formatSize(calcSubtreeSize(node))}</strong>
            </StatusItem>
          </StatusBar>
        </>
      ) : (
        <>
          <FileViewArea>
            <FileCard>
              <FileIcon sx={{ fontSize: 64, color: '#6366f1' }} />
              <FileName>{node.name}</FileName>
              <MetaGrid>
                <MetaLabel>{t('node_size')}</MetaLabel>
                <MetaValue>{formatSize(node.size)}</MetaValue>
                <MetaLabel>{t('node_path')}</MetaLabel>
                <MetaValue $mono>{pathSegments.join('/')}</MetaValue>
              </MetaGrid>
            </FileCard>
          </FileViewArea>

          <StatusBar>
            <StatusItem>{t('explorer_type_file')}</StatusItem>
            <StatusDot />
            <StatusItem>
              {t('node_size')}: <strong>{formatSize(node.size)}</strong>
            </StatusItem>
          </StatusBar>
        </>
      )}
    </Container>
  )
}

// ─── Styled components ────────────────────────────────────────────────────────

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
`

const AddressBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 20px;
  min-height: 44px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  flex-wrap: wrap;
  gap: 0;
`

const AddressFolder = styled.span`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  flex-shrink: 0;
`

const Sep = styled.span`
  color: #94a3b8;
  font-size: 14px;
  padding: 0 4px;
  user-select: none;
`

const SegLink = styled(Link)`
  font-size: 13px;
  font-weight: 500;
  color: #6366f1;
  text-decoration: none;
  padding: 2px 4px;
  border-radius: 4px;
  transition: background 0.12s;

  &:hover {
    background: rgba(99, 102, 241, 0.08);
    text-decoration: underline;
  }
`

const CurrentSeg = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
  padding: 2px 4px;
`

// Table

const TableWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TH = styled.th`
  padding: 10px 20px;
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #94a3b8;
  background: #f8fafc;
  border-bottom: 2px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 1;
`

const DataTR = styled.tr`
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: #f1f5f9;
  }

  &:hover td:first-child span {
    color: #6366f1;
  }
`

const TD = styled.td`
  padding: 8px 20px;
  font-size: 13px;
  color: #334155;
  border-bottom: 1px solid #f1f5f9;
`

const EmptyTD = styled.td`
  padding: 48px 20px;
  text-align: center;
  font-size: 13px;
  color: #94a3b8;
  font-style: italic;
`

const NameCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const NodeName = styled.span<{ $isFolder: boolean }>`
  font-weight: ${({ $isFolder }) => ($isFolder ? 500 : 400)};
  color: ${({ $isFolder }) => ($isFolder ? '#1e293b' : '#475569')};
`

const TypeBadge = styled.span<{ $type: 'file' | 'folder' }>`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: ${({ $type }) => ($type === 'folder' ? '#fef3c7' : '#f1f5f9')};
  color: ${({ $type }) => ($type === 'folder' ? '#92400e' : '#475569')};
`

const SizeText = styled.span`
  font-variant-numeric: tabular-nums;
  color: #64748b;
  font-size: 12px;
`

// Status bar

const StatusBar = styled.footer`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  font-size: 12px;
  color: #64748b;
  flex-shrink: 0;
  min-height: 36px;
`

const StatusItem = styled.span`
  strong {
    color: #475569;
    font-weight: 600;
  }
`

const StatusDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #cbd5e1;
  flex-shrink: 0;
`

// File card view

const FileViewArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #f8fafc;
`

const FileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 48px 64px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  min-width: 360px;
  max-width: 560px;
`

const FileName = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  word-break: break-all;
  text-align: center;
`

const MetaGrid = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 20px;
  margin: 0;
  width: 100%;
  align-items: baseline;
`

const MetaLabel = styled.dt`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #94a3b8;
  white-space: nowrap;
`

const MetaValue = styled.dd<{ $mono?: boolean }>`
  margin: 0;
  font-size: 13px;
  color: #475569;
  font-family: ${({ $mono }) => ($mono ? "'JetBrains Mono', 'Fira Code', monospace" : 'inherit')};
  word-break: break-all;
`
