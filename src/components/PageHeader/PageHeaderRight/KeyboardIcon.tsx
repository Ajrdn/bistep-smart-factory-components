import React from 'react'
import { styled } from '@mui/material/styles'
import Keyboard from '@mui/icons-material/Keyboard'


const WhiteKeyboardIcon = styled(Keyboard)({
  color: 'white',
})


function KeyboardIcon() {
  return (
    <WhiteKeyboardIcon />
  )
}

export default KeyboardIcon
