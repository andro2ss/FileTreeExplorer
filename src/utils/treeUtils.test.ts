import { describe, it, expect } from 'vitest'
import { isTreeNode, findNode, calcSubtreeSize, searchTree } from './treeUtils'
import type { TreeNode } from '../types/tree'

// ─── fixtures ────────────────────────────────────────────────────────────────

const fileNode: TreeNode = { type: 'file', name: 'index.ts', size: 1024 }

const tree: TreeNode = {
  type: 'folder',
  name: 'root',
  children: [
    {
      type: 'folder',
      name: 'src',
      children: [
        { type: 'file', name: 'App.tsx', size: 2048 },
        { type: 'file', name: 'main.tsx', size: 512 },
      ],
    },
    { type: 'file', name: 'README.md', size: 256 },
  ],
}

// ─── isTreeNode ───────────────────────────────────────────────────────────────

describe('isTreeNode', () => {
  it('accepts a valid file node', () => {
    expect(isTreeNode({ type: 'file', name: 'a.ts', size: 0 })).toBe(true)
  })

  it('accepts a valid folder node', () => {
    expect(isTreeNode({ type: 'folder', name: 'src', children: [] })).toBe(true)
  })

  it('rejects null and primitives', () => {
    expect(isTreeNode(null)).toBe(false)
    expect(isTreeNode(42)).toBe(false)
    expect(isTreeNode('string')).toBe(false)
  })

  it('rejects a file missing size', () => {
    expect(isTreeNode({ type: 'file', name: 'a.ts' })).toBe(false)
  })

  it('rejects a folder missing children', () => {
    expect(isTreeNode({ type: 'folder', name: 'src' })).toBe(false)
  })

  it('rejects an unknown type', () => {
    expect(isTreeNode({ type: 'symlink', name: 'link' })).toBe(false)
  })
})

// ─── findNode ─────────────────────────────────────────────────────────────────

describe('findNode', () => {
  it('returns root when path matches only root', () => {
    expect(findNode(tree, ['root'])).toBe(tree)
  })

  it('finds a nested file', () => {
    const node = findNode(tree, ['root', 'src', 'App.tsx'])
    expect(node).not.toBeNull()
    expect(node?.name).toBe('App.tsx')
  })

  it('finds a nested folder', () => {
    const node = findNode(tree, ['root', 'src'])
    expect(node?.type).toBe('folder')
    expect(node?.name).toBe('src')
  })

  it('returns null for an empty path', () => {
    expect(findNode(tree, [])).toBeNull()
  })

  it('returns null when path does not exist', () => {
    expect(findNode(tree, ['root', 'nonexistent'])).toBeNull()
  })

  it('returns null when trying to descend into a file', () => {
    expect(findNode(tree, ['root', 'README.md', 'child'])).toBeNull()
  })
})

// ─── calcSubtreeSize ──────────────────────────────────────────────────────────

describe('calcSubtreeSize', () => {
  it('returns size directly for a file', () => {
    expect(calcSubtreeSize(fileNode)).toBe(1024)
  })

  it('sums sizes of all descendants', () => {
    // App.tsx(2048) + main.tsx(512) + README.md(256) = 2816
    expect(calcSubtreeSize(tree)).toBe(2816)
  })

  it('returns 0 for an empty folder', () => {
    const empty: TreeNode = { type: 'folder', name: 'empty', children: [] }
    expect(calcSubtreeSize(empty)).toBe(0)
  })
})

// ─── searchTree ───────────────────────────────────────────────────────────────

describe('searchTree', () => {
  it('finds nodes by exact name', () => {
    const results = searchTree(tree, 'App.tsx')
    expect(results).toHaveLength(1)
    expect(results[0].node.name).toBe('App.tsx')
  })

  it('is case-insensitive', () => {
    const results = searchTree(tree, 'app.tsx')
    expect(results).toHaveLength(1)
  })

  it('finds multiple matches', () => {
    // "main.tsx" and "App.tsx" both contain "tsx" (lower)
    const results = searchTree(tree, '.tsx')
    expect(results).toHaveLength(2)
  })

  it('returns full path from root', () => {
    const results = searchTree(tree, 'main.tsx')
    expect(results[0].path).toBe('root/src/main.tsx')
  })

  it('returns empty array when nothing matches', () => {
    expect(searchTree(tree, 'zzznomatch')).toHaveLength(0)
  })

  it('includes folders in results when name matches', () => {
    const results = searchTree(tree, 'src')
    expect(results.some((r) => r.node.type === 'folder')).toBe(true)
  })
})
