import { useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Alert } from '@mui/material'
import { useTreeStore } from '../store/treeStore'
import { findNode } from '../utils/treeUtils'
import { decodePath } from '../utils/pathUtils'
import { ExplorerPane } from '../organisms/ExplorerPane'

export default function ExplorerPage() {
  const { '*': splat } = useParams()
  const { t } = useTranslation()
  const tree = useTreeStore((s) => s.tree)

  if (!tree) return <Navigate to="/" replace />

  if (!splat) {
    return <ExplorerPane node={tree} pathSegments={[tree.name]} />
  }

  const segments = decodePath(splat)
  const node = findNode(tree, segments)

  if (!node) return <Alert severity="error" sx={{ m: 3 }}>{t('not_found')}</Alert>

  return <ExplorerPane node={node} pathSegments={segments} />
}
