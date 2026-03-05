import { useTranslation } from 'react-i18next'
import { Typography, Stack } from '@mui/material'
import { FileSizeDisplay } from './FileSizeDisplay'
import type { FileNode } from '../types/tree'

type Props = {
  node: FileNode
  path: string
}

export function FileDetails({ node, path }: Props) {
  const { t } = useTranslation()

  return (
    <Stack spacing={1}>
      <Typography variant="h6">{node.name}</Typography>
      <Typography variant="body2">
        <strong>{t('node_name')}:</strong> {node.name}
      </Typography>
      <FileSizeDisplay bytes={node.size} />
      <Typography variant="body2">
        <strong>{t('node_path')}:</strong> {path}
      </Typography>
    </Stack>
  )
}
