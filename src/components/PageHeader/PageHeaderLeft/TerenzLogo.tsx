import React from 'react'
import Box from '@mui/material/Box'
import { ReactComponent as Icon } from 'assets/images/terenz_logo.svg'


function TerenzLogo() {
  return (
    <Box sx={{
      margin: '0 44px',
    }}>
      <Icon
        width='112px'
        height='44px'
      />
    </Box>
  )
}

export default TerenzLogo
