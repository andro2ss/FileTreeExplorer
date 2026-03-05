import { useState } from 'react'
import { TreeNodeRow } from '../molecules/TreeNodeRow'
import type { TreeNode } from '../types/tree'

type Props = {
  node: TreeNode
  depth?: number
  parentSegments?: string[]
}

export function TreeView({ node, depth = 0, parentSegments = [] }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const currentSegments = [...parentSegments, node.name]

  function toggle() {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div>
      <TreeNodeRow
        node={node}
        depth={depth}
        expanded={isExpanded}
        onToggle={node.type === 'folder' ? toggle : undefined}
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
