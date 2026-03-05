import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Box } from '@mui/material'
import { JsonInputForm } from '../organisms/JsonInputForm'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <Page>
      <Hero>
        <HeroLogo>🗂</HeroLogo>
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
  padding: 56px 24px 72px;
  text-align: center;
`

const HeroLogo = styled.div`
  font-size: 68px;
  line-height: 1;
  margin-bottom: 20px;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.4));
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
