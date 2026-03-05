import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { CircularProgress, Box, Typography } from '@mui/material'

const HomePage = lazy(() => import('../pages/HomePage'))
const TreePage = lazy(() => import('../pages/TreePage'))
const NodeDetailsPage = lazy(() => import('../pages/NodeDetailsPage'))

function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>
  )
}

function TreeWelcome() {
  const { t } = useTranslation()
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      sx={{ color: 'text.secondary' }}
    >
      <Typography variant="body2">{t('select_node')}</Typography>
    </Box>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tree" element={<TreePage />}>
            <Route index element={<TreeWelcome />} />
            <Route path=":nodePath" element={<NodeDetailsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
