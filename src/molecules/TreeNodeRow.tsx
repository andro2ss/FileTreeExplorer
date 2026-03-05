import { Link, useMatch } from 'react-router-dom'
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
  const match = useMatch(`/tree/${encodedPath}`)
  const isActive = !!match

  return (
    <Row $depth={depth}>
      {isFolder ? (
        <ToggleButton
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={node.name}
          type="button"
          $isActive={isActive}
        >
          <ChevronWrap>
            <Chevron expanded={expanded} />
          </ChevronWrap>
          {expanded ? (
            <FolderOpenIcon sx={{ fontSize: 15, color: '#fbbf24', flexShrink: 0 }} />
          ) : (
            <FolderIcon sx={{ fontSize: 15, color: '#f59e0b', flexShrink: 0 }} />
          )}
          <NodeLink
            to={`/tree/${encodedPath}`}
            $isActive={isActive}
            onClick={(e) => e.stopPropagation()}
          >
            {node.name}
          </NodeLink>
        </ToggleButton>
      ) : (
        <FileRow $isActive={isActive}>
          <FileSpacer />
          <FileIcon sx={{ fontSize: 15, color: '#94a3b8', flexShrink: 0 }} />
          <NodeLink to={`/tree/${encodedPath}`} $isActive={isActive}>
            {node.name}
          </NodeLink>
        </FileRow>
      )}
    </Row>
  )
}

const Row = styled.div<{ $depth: number }>`
  padding-left: ${({ $depth }) => $depth * 12}px;
`

const ToggleButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  background: ${({ $isActive }) => ($isActive ? 'rgba(99, 102, 241, 0.18)' : 'transparent')};
  border: none;
  border-left: 2px solid ${({ $isActive }) => ($isActive ? '#6366f1' : 'transparent')};
  cursor: pointer;
  padding: 5px 10px 5px 8px;
  width: 100%;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${({ $isActive }) =>
      $isActive ? 'rgba(99, 102, 241, 0.24)' : 'rgba(255, 255, 255, 0.05)'};
  }
`

const FileRow = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px 5px 10px;
  border-left: 2px solid ${({ $isActive }) => ($isActive ? '#6366f1' : 'transparent')};
  background: ${({ $isActive }) => ($isActive ? 'rgba(99, 102, 241, 0.18)' : 'transparent')};
  transition: background 0.12s;

  &:hover {
    background: ${({ $isActive }) =>
      $isActive ? 'rgba(99, 102, 241, 0.24)' : 'rgba(255, 255, 255, 0.05)'};
  }
`

const ChevronWrap = styled.span`
  display: flex;
  align-items: center;
  color: #475569;
  flex-shrink: 0;
`

const FileSpacer = styled.span`
  width: 16px;
  flex-shrink: 0;
`

const NodeLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? '#c7d2fe' : '#94a3b8')};
  text-decoration: none;
  font-size: 13px;
  font-weight: ${({ $isActive }) => ($isActive ? '500' : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
  transition: color 0.1s;

  &:hover {
    color: #e2e8f0;
  }
`
