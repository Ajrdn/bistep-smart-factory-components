import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TerenzLogo from './TerenzLogo'
import PageRouters from './PageRouters'


const PageHeaderLeftBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  height: '64px',
})


function PageHeaderLeft() {
  return (
    <PageHeaderLeftBox>
      <TerenzLogo />
      <PageRouters />
    </PageHeaderLeftBox>
  )
}

export default PageHeaderLeft
