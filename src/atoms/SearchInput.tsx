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
      <SearchIconWrap aria-hidden="true">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </SearchIconWrap>
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

const SearchIconWrap = styled.span`
  position: absolute;
  left: 10px;
  color: #475569;
  display: flex;
  align-items: center;
  pointer-events: none;
`

const Input = styled.input`
  width: 100%;
  padding: 8px 28px 8px 32px;
  font-size: 12.5px;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 7px;
  color: #e2e8f0;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.15s, background 0.15s;

  &::placeholder {
    color: #475569;
  }

  &:focus {
    border-color: #6366f1;
    background: rgba(99, 102, 241, 0.1);
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
  font-size: 11px;
  color: #475569;
  line-height: 1;
  padding: 2px 3px;

  &:hover {
    color: #94a3b8;
  }
`
