import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useNavigate } from 'react-router-dom'


const PageRouterTabs = styled(Tabs)({
  height: '64px',
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
  url: string
}


function PageRouters() {
  const navigate = useNavigate()

  const [url, setUrl] = useState<string>('/processOrder')

  const pageRouterList: PageRouter[] = [
    {
      pageName: '작업지시서',
      url: '/processOrder',
    },
    {
      pageName: '작업계획서',
      url: '/processPlanner',
    },
    {
      pageName: '작업목록',
      url: '/processList',
    },
    {
      pageName: '사용자 관리',
      url: '/admin',
    },
  ]

  const urlChange = (event: React.SyntheticEvent, newUrl: string) => {
    setUrl(newUrl)
    navigate(newUrl)
  }

  return (
    <PageRouterTabs
      value={url}
      onChange={urlChange}
    >
      {pageRouterList.map(pageRouter => (
        <PageRouterTab
          key={pageRouter.pageName}
          label={pageRouter.pageName}
          value={pageRouter.url}
        />
      ))}
    </PageRouterTabs>
  )
}

export default PageRouters
