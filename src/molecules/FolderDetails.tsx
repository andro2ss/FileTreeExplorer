import { useTranslation } from 'react-i18next'
import { Typography, Stack, List, ListItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { FileSizeDisplay } from './FileSizeDisplay'
import { calcSubtreeSize } from '../utils/treeUtils'
import { encodePath } from '../utils/pathUtils'
import type { FolderNode } from '../types/tree'

type Props = {
  node: FolderNode
  path: string
  pathSegments: string[]
}

export function FolderDetails({ node, path, pathSegments }: Props) {
  const { t } = useTranslation()
  const totalSize = calcSubtreeSize(node)

  return (
    <Stack spacing={1}>
      <Typography variant="h6">{node.name}</Typography>
      <Typography variant="body2">
        <strong>{t('node_name')}:</strong> {node.name}
      </Typography>
      <Typography variant="body2">
        <strong>{t('node_path')}:</strong> {path}
      </Typography>
      <Typography variant="body2">
        <strong>{t('node_children')}:</strong> {node.children.length}
      </Typography>
      <FileSizeDisplay bytes={totalSize} />
      <List dense disablePadding>
        {node.children.map((child) => {
          const childSegments = [...pathSegments, child.name]
          return (
            <ListItem key={child.name} disablePadding>
              <Link to={`/tree/${encodePath(childSegments)}`}>{child.name}</Link>
            </ListItem>
          )
        })}
      </List>
    </Stack>
  )
}
