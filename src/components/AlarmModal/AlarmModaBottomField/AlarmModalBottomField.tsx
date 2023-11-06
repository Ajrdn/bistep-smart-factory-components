import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import AlarmModalBottomSelect from './AlarmModalBottomSelect'
import AlarmModalBottomButton from './AlarmModalBottomButton'


const BottomFieldBox = styled(Box)({
  width: '100%',
  height: '56px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
})


function AlarmModalBottomField() {
  return (
    <BottomFieldBox>
      <AlarmModalBottomSelect />
      <AlarmModalBottomButton />
    </BottomFieldBox>
  )
}

export default AlarmModalBottomField
