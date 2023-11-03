import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import PageRouterButtonBox from './PageRouterButtonBox'


const PageHeaderRightBox = styled(Box)({
  width: '362px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})


function PageHeaderRight() {
  return (
    <PageHeaderRightBox>
      <PageRouterButtonBox />
    </PageHeaderRightBox>
  )
}

export default PageHeaderRight
