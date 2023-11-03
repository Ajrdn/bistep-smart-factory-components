import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import PageHeader from './components/PageHeader/PageHeader'


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
      <Outlet />
    </PageBackground>
  )
}

export default App
