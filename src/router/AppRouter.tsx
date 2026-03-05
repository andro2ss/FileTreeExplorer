import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { CircularProgress, Box } from '@mui/material'

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

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tree" element={<TreePage />}>
            <Route index element={<Box p={2} />} />
            <Route path=":nodePath" element={<NodeDetailsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
