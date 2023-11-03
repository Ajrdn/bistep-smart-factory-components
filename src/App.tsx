import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import PageHeader from './components/PageHeader/PageHeader'
import router from 'routes/router'


const PageBackground = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})


function App() {
  return (
    <PageBackground>
      <PageHeader />
      <RouterProvider router={router} />
    </PageBackground>
  )
}

export default App
