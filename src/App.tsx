import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import PageRouter from './components/PageRouter/PageRouter'


const PageBackground = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
})


function App() {
  return (
    <PageBackground>
      <PageRouter />
    </PageBackground>
  )
}

export default App
