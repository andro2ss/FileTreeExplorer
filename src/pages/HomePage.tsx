import { useTranslation } from 'react-i18next'
import { Container, Typography } from '@mui/material'
import { JsonInputForm } from '../organisms/JsonInputForm'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        {t('home_title')}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" mb={4}>
        {t('home_subtitle')}
      </Typography>
      <JsonInputForm />
    </Container>
  )
}
