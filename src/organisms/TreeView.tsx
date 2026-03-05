import { TreeNodeRow } from '../molecules/TreeNodeRow'
import { useExpandedStore } from '../store/expandedStore'
import type { TreeNode } from '../types/tree'

type Props = {
  node: TreeNode
  depth?: number
  parentSegments?: string[]
}

export function TreeView({ node, depth = 0, parentSegments = [] }: Props) {
  const expandedPaths = useExpandedStore((s) => s.expandedPaths)
  const toggle = useExpandedStore((s) => s.toggle)

  const currentSegments = [...parentSegments, node.name]
  const path = currentSegments.join('/')
  const isExpanded = expandedPaths.includes(path)

  return (
    <div>
      <TreeNodeRow
        node={node}
        depth={depth}
        expanded={isExpanded}
        onToggle={node.type === 'folder' ? () => toggle(path) : undefined}
        pathSegments={currentSegments}
      />
      {node.type === 'folder' && isExpanded && (
        <div>
          {node.children.map((child) => (
            <TreeView
              key={child.name}
              node={child}
              depth={depth + 1}
              parentSegments={currentSegments}
            />
          ))}
        </div>
      )}
    </div>
  )
}
