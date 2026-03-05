import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FileIcon, FolderIcon } from '../atoms/TreeIcons'
import { encodePath } from '../utils/pathUtils'
import type { TreeNode } from '../types/tree'

type Props = {
  node: TreeNode
  path: string
}

export function SearchResultItem({ node, path }: Props) {
  const segments = path.split('/')
  const encodedPath = encodePath(segments)
  const isFolder = node.type === 'folder'

  return (
    <Item>
      <ResultLink to={`/tree/${encodedPath}`}>
        {isFolder ? (
          <FolderIcon sx={{ fontSize: 14, color: '#f59e0b', flexShrink: 0 }} />
        ) : (
          <FileIcon sx={{ fontSize: 14, color: '#64748b', flexShrink: 0 }} />
        )}
        <TextGroup>
          <Name>{node.name}</Name>
          <Path>{path}</Path>
        </TextGroup>
      </ResultLink>
    </Item>
  )
}

const Item = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }
`

const ResultLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  text-decoration: none;
  transition: background 0.1s;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`

const Name = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #cbd5e1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Path = styled.span`
  font-size: 10px;
  color: #475569;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ui-monospace, 'Cascadia Code', monospace;
`
