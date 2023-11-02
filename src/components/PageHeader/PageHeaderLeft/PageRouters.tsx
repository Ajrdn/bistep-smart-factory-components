import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'


const PageRouterTabs = styled(Tabs)({
  width: '704px',
  height: '64px',
  display: 'flex',
  gap: '16px',
  '& .MuiTabs-indicator': {
    height: '4px',
    backgroundColor: '#90CAF9',
  },
})


const PageRouterTab = styled(Tab)({
  width: '160px',
  height: '64px',
  padding: '18px 8px',
  color: '#FFFFFF',
  fontSize: '23px',
  fontFamily: 'Pretendard',
  fontWeight: 600,
  '&.Mui-selected': {
    color: '#90CAF9',
  },
})


interface PageRouter {
  pageName: string
  index: number
}


function PageRouters() {
  const [index, setIndex] = useState<number>(0)

  const pageRouterList: PageRouter[] = [
    {
      pageName: '작업지시서',
      index: 0,
    },
    {
      pageName: '작업계획서',
      index: 1,
    },
    {
      pageName: '작업목록',
      index: 2,
    },
    {
      pageName: '사용자 관리',
      index: 3,
    },
  ]

  const indexChange = (event: React.SyntheticEvent, newIndex: number) => {
    console.log(newIndex)
    setIndex(newIndex)
  }

  return (
    <PageRouterTabs
      value={index}
      onChange={indexChange}
    >
      {pageRouterList.map(pageRouter => (
        <PageRouterTab
          key={pageRouter.pageName}
          label={pageRouter.pageName}
          value={pageRouter.index}
        />
      ))}
    </PageRouterTabs>
  )
}

export default PageRouters
