import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { i18n } = useTranslation()
  const currentLang = i18n.language.startsWith('pl') ? 'pl' : 'en'

  return (
    <Wrapper $compact={compact}>
      <LangOption $active={currentLang === 'en'} $compact={compact} onClick={() => i18n.changeLanguage('en')}>
        EN
      </LangOption>
      <Divider />
      <LangOption $active={currentLang === 'pl'} $compact={compact} onClick={() => i18n.changeLanguage('pl')}>
        PL
      </LangOption>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $compact: boolean }>`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: ${({ $compact }) => ($compact ? '6px' : '8px')};
  overflow: hidden;
  gap: 0;
`

const LangOption = styled.button<{ $active: boolean; $compact: boolean }>`
  padding: ${({ $compact }) => ($compact ? '4px 8px' : '5px 12px')};
  font-size: ${({ $compact }) => ($compact ? '11px' : '12px')};
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.04em;
  background: ${({ $active }) => ($active ? 'rgba(255,255,255,0.22)' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : 'rgba(255,255,255,0.45)')};
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.14);
  }
`

const Divider = styled.span`
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.18);
  flex-shrink: 0;
`
