import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'


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
  const location = useLocation()

  const [url, setUrl] = useState<string>(location.pathname)

  const pageRouterList: PageRouter[] = [
    {
      pageName: '작업지시서',
      url: '/processorder',
    },
    {
      pageName: '작업계획서',
      url: '/processplanner',
    },
    {
      pageName: '작업목록',
      url: '/processlist',
    },
    {
      pageName: '사용자 관리',
      url: '/admin',
    },
  ]

  useEffect(() => {
    setUrl(location.pathname)
  }, [location.pathname])

  const urlChange = (event: React.SyntheticEvent, newUrl: string) => {
    navigate(newUrl)
    setUrl(newUrl)
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
