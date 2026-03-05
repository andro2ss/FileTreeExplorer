import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Box } from '@mui/material'
import { JsonInputForm } from '../organisms/JsonInputForm'
import { LanguageSwitcher } from '../atoms/LanguageSwitcher'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <Page>
      <Hero>
        <HeroTopBar>
          <LanguageSwitcher />
        </HeroTopBar>
        <HeroLogo aria-hidden="true">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="28" width="64" height="44" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
            <path d="M8 38a6 6 0 0 1 6-6h18l6 8h30a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V38Z" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <rect x="20" y="50" width="12" height="2" rx="1" fill="rgba(255,255,255,0.6)" />
            <rect x="20" y="56" width="20" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
            <rect x="20" y="62" width="16" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
          </svg>
        </HeroLogo>
        <HeroTitle>{t('home_title')}</HeroTitle>
        <HeroSubtitle>{t('home_subtitle')}</HeroSubtitle>
      </Hero>
      <Box sx={{ px: 2, pb: 8 }}>
        <JsonInputForm />
      </Box>
    </Page>
  )
}

const Page = styled.div`
  min-height: 100%;
  background: #f8fafc;
`

const Hero = styled.header`
  background: linear-gradient(160deg, #1e1b4b 0%, #3730a3 55%, #6366f1 100%);
  padding: 24px 24px 72px;
  text-align: center;
`

const HeroTopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
`

const HeroLogo = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.35));
`

const HeroTitle = styled.h1`
  margin: 0 0 14px;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #fff;
`

const HeroSubtitle = styled.p`
  margin: 0 auto;
  max-width: 460px;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
`
