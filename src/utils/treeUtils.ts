import type { TreeNode } from '../types/tree'

export function isTreeNode(value: unknown): value is TreeNode {
  if (typeof value !== 'object' || value === null) return false
  const obj = value as Record<string, unknown>
  if (typeof obj['name'] !== 'string') return false
  if (obj['type'] === 'file') return typeof obj['size'] === 'number'
  if (obj['type'] === 'folder') return Array.isArray(obj['children'])
  return false
}

export function findNode(root: TreeNode, pathSegments: string[]): TreeNode | null {
  if (pathSegments.length === 0) return null

  const [first, ...rest] = pathSegments

  if (root.name !== first) return null
  if (rest.length === 0) return root

  if (root.type !== 'folder') return null

  for (const child of root.children) {
    const found = findNode(child, rest)
    if (found) return found
  }

  return null
}

export function calcSubtreeSize(node: TreeNode): number {
  if (node.type === 'file') return node.size
  return node.children.reduce((sum, child) => sum + calcSubtreeSize(child), 0)
}

export function searchTree(
  root: TreeNode,
  query: string,
): Array<{ node: TreeNode; path: string }> {
  const results: Array<{ node: TreeNode; path: string }> = []
  const lowerQuery = query.toLowerCase()

  function traverse(node: TreeNode, currentPath: string) {
    const nodePath = currentPath ? `${currentPath}/${node.name}` : node.name

    if (node.name.toLowerCase().includes(lowerQuery)) {
      results.push({ node, path: nodePath })
    }

    if (node.type === 'folder') {
      for (const child of node.children) {
        traverse(child, nodePath)
      }
    }
  }

  traverse(root, '')
  return results
}
