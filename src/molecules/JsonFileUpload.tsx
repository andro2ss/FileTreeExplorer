import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, Typography } from '@mui/material'
import { Button } from '../atoms/Button'
import type { TreeNode } from '../types/tree'
import { isTreeNode } from '../utils/treeUtils'

type Props = {
  onSubmit: (tree: TreeNode) => void
}

export function JsonFileUpload({ onSubmit }: Props) {
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null)
    const file = e.target.files?.[0]
    if (!file) return

    setFileName(file.name)
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const parsed: unknown = JSON.parse(event.target?.result as string)
        if (!isTreeNode(parsed)) {
          setError(t('invalid_json_structure'))
          return
        }
        onSubmit(parsed)
      } catch {
        setError(t('invalid_json'))
      }
    }
    reader.readAsText(file)
  }

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        {t('upload_label')}
      </Typography>
      <input
        ref={inputRef}
        type="file"
        accept=".json"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Button variant="outlined" onClick={() => inputRef.current?.click()}>
        {fileName ?? t('upload_label')}
      </Button>
      {error && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {error}
        </Alert>
      )}
    </div>
  )
}
