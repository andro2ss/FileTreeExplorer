import { Navigate } from 'react-router-dom'
import { useTreeStore } from '../store/treeStore'
import TreeLayout from '../templates/TreeLayout'

export default function TreePage() {
  const tree = useTreeStore((s) => s.tree)

  if (!tree) return <Navigate to="/" replace />

  return <TreeLayout />
}

