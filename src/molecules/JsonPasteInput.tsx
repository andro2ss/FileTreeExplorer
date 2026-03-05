import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, Typography } from '@mui/material'
import { TextArea } from '../atoms/TextArea'
import { Button } from '../atoms/Button'
import type { TreeNode } from '../types/tree'
import { isTreeNode } from '../utils/treeUtils'

type Props = {
  onSubmit: (tree: TreeNode) => void
}

export function JsonPasteInput({ onSubmit }: Props) {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit() {
    setError(null)
    try {
      const parsed: unknown = JSON.parse(value)
      if (!isTreeNode(parsed)) {
        setError(t('invalid_json_structure'))
        return
      }
      onSubmit(parsed)
    } catch {
      setError(t('invalid_json'))
    }
  }

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        {t('paste_label')}
      </Typography>
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='{ "name": "root", "type": "folder", "children": [] }'
      />
      {error && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {error}
        </Alert>
      )}
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit} disabled={!value.trim()}>
        {t('submit')}
      </Button>
    </div>
  )
}
