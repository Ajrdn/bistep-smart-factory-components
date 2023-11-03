import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import UserProfile from './UserProfile'
import KeyboardIcon from './KeyboardIcon'


const EtcBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})


function PageHeaderEtcBox() {
  return (
    <EtcBox>
      <KeyboardIcon />
      <UserProfile />
    </EtcBox>
  )
}

export default PageHeaderEtcBox
