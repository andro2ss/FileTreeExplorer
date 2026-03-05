import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { formatSize } from '../utils/formatSize'

type Props = {
  bytes: number
}

export function FileSizeDisplay({ bytes }: Props) {
  const { t } = useTranslation()

  return (
    <Typography variant="body2">
      <strong>{t('node_size')}:</strong> {formatSize(bytes)}
    </Typography>
  )
}
