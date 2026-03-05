import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Alert } from '@mui/material'
import { useTreeStore } from '../store/treeStore'
import { findNode } from '../utils/treeUtils'
import { decodePath } from '../utils/pathUtils'
import { FileDetails } from '../molecules/FileDetails'
import { FolderDetails } from '../molecules/FolderDetails'

export default function NodeDetailsPage() {
  const { nodePath } = useParams<{ nodePath: string }>()
  const { t } = useTranslation()
  const tree = useTreeStore((s) => s.tree)

  if (!tree || !nodePath) return <Alert severity="error">{t('not_found')}</Alert>

  const segments = decodePath(nodePath)
  const node = findNode(tree, segments)

  if (!node) return <Alert severity="error">{t('not_found')}</Alert>

  const path = segments.join('/')

  if (node.type === 'file') {
    return <FileDetails node={node} path={path} />
  }

  return <FolderDetails node={node} path={path} pathSegments={segments} />
}
