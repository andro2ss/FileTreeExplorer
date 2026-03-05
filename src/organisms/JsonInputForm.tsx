import { useTranslation } from 'react-i18next'
import { Box, Divider, Typography } from '@mui/material'
import { JsonPasteInput } from '../molecules/JsonPasteInput'
import { JsonFileUpload } from '../molecules/JsonFileUpload'
import { useTreeStore } from '../store/treeStore'
import { useNavigate } from 'react-router-dom'
import type { TreeNode } from '../types/tree'

export function JsonInputForm() {
  const { t } = useTranslation()
  const setTree = useTreeStore((s) => s.setTree)
  const navigate = useNavigate()

  function handleTree(tree: TreeNode) {
    setTree(tree)
    navigate('/tree')
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, px: 2 }}>
      <JsonPasteInput onSubmit={handleTree} />
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          {t('or')}
        </Typography>
      </Divider>
      <JsonFileUpload onSubmit={handleTree} />
    </Box>
  )
}
