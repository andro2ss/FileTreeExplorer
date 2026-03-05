export type FileNode = {
  type: 'file'
  name: string
  size: number
}

export type FolderNode = {
  type: 'folder'
  name: string
  children: TreeNode[]
}

export type TreeNode = FileNode | FolderNode
