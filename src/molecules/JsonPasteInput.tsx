import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, Typography } from '@mui/material'
import styled from 'styled-components'
import { TextArea } from '../atoms/TextArea'
import { Button } from '../atoms/Button'
import type { TreeNode } from '../types/tree'
import { isTreeNode } from '../utils/treeUtils'

const EXAMPLE_JSON = JSON.stringify(
  {
    type: 'folder',
    name: 'my-project',
    children: [
      {
        type: 'folder',
        name: 'src',
        children: [
          {
            type: 'folder',
            name: 'components',
            children: [
              { type: 'file', name: 'Button.tsx', size: 2048 },
              { type: 'file', name: 'Modal.tsx', size: 5120 },
              { type: 'file', name: 'index.ts', size: 320 },
            ],
          },
          {
            type: 'folder',
            name: 'utils',
            children: [
              { type: 'file', name: 'formatDate.ts', size: 1024 },
              { type: 'file', name: 'api.ts', size: 8192 },
            ],
          },
          {
            type: 'folder',
            name: '__tests__',
            children: [
              { type: 'file', name: 'Button.test.tsx', size: 3072 },
              { type: 'file', name: 'api.test.ts', size: 4096 },
            ],
          },
          { type: 'file', name: 'main.tsx', size: 512 },
          { type: 'file', name: 'vite-env.d.ts', size: 64 },
        ],
      },
      {
        type: 'folder',
        name: 'public',
        children: [
          { type: 'file', name: 'favicon.ico', size: 15086 },
          { type: 'file', name: 'og-image.png', size: 204800 },
        ],
      },
      {
        type: 'folder',
        name: 'dist',
        children: [],
      },
      { type: 'file', name: 'package.json', size: 1340 },
      { type: 'file', name: 'tsconfig.json', size: 720 },
      { type: 'file', name: 'vite.config.ts', size: 890 },
      { type: 'file', name: 'README.md', size: 3500 },
      { type: 'file', name: '.gitignore', size: 256 },
    ],
  },
  null,
  2,
)

type Props = {
  onSubmit: (tree: TreeNode) => void
}

export function JsonPasteInput({ onSubmit }: Props) {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const [errorKey, setErrorKey] = useState<string | null>(null)

  function handleSubmit() {
    setErrorKey(null)
    try {
      const parsed: unknown = JSON.parse(value)
      if (!isTreeNode(parsed)) {
        setErrorKey('invalid_json_structure')
        return
      }
      onSubmit(parsed)
    } catch {
      setErrorKey('invalid_json')
    }
  }

  return (
    <div>
      <LabelRow>
        <Typography variant="subtitle1">{t('paste_label')}</Typography>
        <ExampleButton type="button" onClick={() => { setValue(EXAMPLE_JSON); setErrorKey(null) }}>
          {t('load_example')}
        </ExampleButton>
      </LabelRow>
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='{ "name": "root", "type": "folder", "children": [] }'
      />
      {errorKey && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {t(errorKey)}
        </Alert>
      )}
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit} disabled={!value.trim()}>
        {t('submit')}
      </Button>
    </div>
  )
}

const LabelRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 6px;
`

const ExampleButton = styled.button`
  font-size: 12px;
  font-weight: 500;
  font-family: inherit;
  color: #6366f1;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 0;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.12s;

  &:hover {
    color: #4f46e5;
  }
`
