import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/i18n'
import { JsonPasteInput } from './JsonPasteInput'
import type { TreeNode } from '../types/tree'

function renderComponent(onSubmit = vi.fn()) {
  return render(
    <I18nextProvider i18n={i18n}>
      <JsonPasteInput onSubmit={onSubmit} />
    </I18nextProvider>,
  )
}

function fillTextarea(value: string) {
  fireEvent.change(screen.getByRole('textbox'), { target: { value } })
}

const VALID_TREE = JSON.stringify({
  type: 'folder',
  name: 'root',
  children: [{ type: 'file', name: 'index.ts', size: 100 }],
})

const VALID_FILE = JSON.stringify({ type: 'file', name: 'index.ts', size: 100 })

const INVALID_JSON = '{ not valid json ;;'

const INVALID_STRUCTURE = JSON.stringify({ type: 'unknown', name: 'x' })

beforeEach(async () => {
  await i18n.changeLanguage('en')
})

describe('JsonPasteInput', () => {
  it('renders the paste label and a disabled submit button when empty', () => {
    renderComponent()
    expect(screen.getByText('Paste JSON')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /load tree/i })).toBeDisabled()
  })

  it('enables submit button when textarea has content', async () => {
    renderComponent()
    const textarea = screen.getByRole('textbox')
    await userEvent.type(textarea, 'x')
    expect(screen.getByRole('button', { name: /load tree/i })).toBeEnabled()
  })

  it('shows invalid_json error for malformed JSON', async () => {
    renderComponent()
    fillTextarea(INVALID_JSON)
    await userEvent.click(screen.getByRole('button', { name: /load tree/i }))
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid JSON format')
  })

  it('shows invalid_json_structure error for valid JSON that is not a tree node', async () => {
    renderComponent()
    fillTextarea(INVALID_STRUCTURE)
    await userEvent.click(screen.getByRole('button', { name: /load tree/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(
      'JSON must have a name, type, and be a file or folder',
    )
  })

  it('calls onSubmit with parsed tree for a valid folder', async () => {
    const onSubmit = vi.fn()
    renderComponent(onSubmit)
    fillTextarea(VALID_TREE)
    await userEvent.click(screen.getByRole('button', { name: /load tree/i }))
    expect(onSubmit).toHaveBeenCalledOnce()
    const arg = onSubmit.mock.calls[0][0] as TreeNode
    expect(arg.type).toBe('folder')
    expect(arg.name).toBe('root')
  })

  it('calls onSubmit with parsed tree for a valid file', async () => {
    const onSubmit = vi.fn()
    renderComponent(onSubmit)
    fillTextarea(VALID_FILE)
    await userEvent.click(screen.getByRole('button', { name: /load tree/i }))
    expect(onSubmit).toHaveBeenCalledOnce()
  })

  it('clears the error when submit succeeds after a previous failure', async () => {
    renderComponent()

    fillTextarea(INVALID_JSON)
    await userEvent.click(screen.getByRole('button', { name: /load tree/i }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    fillTextarea(VALID_TREE)
    await userEvent.click(screen.getByRole('button', { name: /load tree/i }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('updates error message text when language is switched (i18n reactivity)', async () => {
    renderComponent()
    fillTextarea(INVALID_JSON)
    await userEvent.click(screen.getByRole('button', { name: /load tree/i }))

    expect(screen.getByRole('alert')).toHaveTextContent('Invalid JSON format')

    await act(() => i18n.changeLanguage('pl'))

    expect(screen.getByRole('alert')).toHaveTextContent('Nieprawidłowy format JSON')
  })
})
