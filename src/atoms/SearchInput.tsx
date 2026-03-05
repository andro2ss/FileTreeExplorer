import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

type Props = {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: Props) {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('search_placeholder')}
        aria-label={t('search_placeholder')}
      />
      {value && (
        <ClearButton type="button" onClick={() => onChange('')} aria-label="clear search">
          ✕
        </ClearButton>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: 100%;
  padding: 8px 32px 8px 10px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`

const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: #999;
  line-height: 1;
  padding: 0;
`
