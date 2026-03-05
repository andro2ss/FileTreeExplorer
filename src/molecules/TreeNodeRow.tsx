import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Chevron } from '../atoms/Chevron'
import { FileIcon, FolderIcon, FolderOpenIcon } from '../atoms/TreeIcons'
import { encodePath } from '../utils/pathUtils'
import type { TreeNode } from '../types/tree'

type Props = {
  node: TreeNode
  depth: number
  expanded?: boolean
  onToggle?: () => void
  pathSegments: string[]
}

export function TreeNodeRow({ node, depth, expanded = false, onToggle, pathSegments }: Props) {
  const encodedPath = encodePath(pathSegments)
  const isFolder = node.type === 'folder'

  return (
    <Row depth={depth}>
      {isFolder ? (
        <ToggleButton
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={node.name}
          type="button"
        >
          <Chevron expanded={expanded} />
          {expanded ? (
            <FolderOpenIcon sx={{ fontSize: 18 }} color="primary" />
          ) : (
            <FolderIcon sx={{ fontSize: 18 }} color="primary" />
          )}
          <NodeLink to={`/tree/${encodedPath}`}>{node.name}</NodeLink>
        </ToggleButton>
      ) : (
        <FileRow>
          <Spacer />
          <FileIcon sx={{ fontSize: 18 }} color="action" />
          <NodeLink to={`/tree/${encodedPath}`}>{node.name}</NodeLink>
        </FileRow>
      )}
    </Row>
  )
}

const Row = styled.div<{ depth: number }>`
  padding-left: ${({ depth }) => depth * 16}px;
`

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  width: 100%;
  text-align: left;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`

const FileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
`

const Spacer = styled.span`
  width: 16px;
  flex-shrink: 0;
`

const NodeLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`
