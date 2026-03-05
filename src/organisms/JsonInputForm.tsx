import { useTranslation } from 'react-i18next'
import { Divider, Typography } from '@mui/material'
import styled from 'styled-components'
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
    <Card>
      <JsonPasteInput onSubmit={handleTree} />
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          {t('or')}
        </Typography>
      </Divider>
      <JsonFileUpload onSubmit={handleTree} />
    </Card>
  )
}

const Card = styled.div`
  max-width: 600px;
  margin: -28px auto 0;
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.06),
    0 10px 40px -4px rgba(0, 0, 0, 0.1);
`
