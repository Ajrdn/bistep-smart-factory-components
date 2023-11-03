import React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import { ReactComponent as Icon } from 'assets/images/terenz_logo.svg'


function TerenzLogo() {
  const navigate = useNavigate()

  return (
    <Box sx={{
      margin: '0 44px',
    }}>
      <Icon
        width='112px'
        height='44px'
        onClick={() => navigate('/dashboard')}
      />
    </Box>
  )
}

export default TerenzLogo
