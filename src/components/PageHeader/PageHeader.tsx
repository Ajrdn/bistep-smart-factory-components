import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import PageHeaderLeft from './PageHeaderLeft/PageHeaderLeft'
import PageHeaderRight from './PageHeaderRight/PageHeaderRight'


const PageHeaderBackground = styled(Box)(({ theme }) =>({
  width: '1920px', 
  height: '64px',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))


function PageHeader() {
  return (
    <PageHeaderBackground>
      <PageHeaderLeft />
      <PageHeaderRight />
    </PageHeaderBackground>
  )
}

export default PageHeader
