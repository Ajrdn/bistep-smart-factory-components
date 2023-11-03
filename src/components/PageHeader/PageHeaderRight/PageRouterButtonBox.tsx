import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import PageRouterButton, { PageRouterButtonProps } from './PageRouterButton'


const ButtonBox = styled(Box)({
  display: 'flex',
  gap: '10px',
})


function PageRouterButtonBox() {
  const navigate = useNavigate()
  const location = useLocation()

  const pageRouterButtons: PageRouterButtonProps[] = [
    {
      name: '용해',
      activated: location.pathname === '/melting',
      router: () => {
        navigate('/melting')
      },
    },
    {
      name: '성분',
      activated: location.pathname === '/element',
      router: () => {
        navigate('/element')
      },
    },
  ]

  return (
    <ButtonBox>
      {pageRouterButtons.map(pageRouterButton => (
        <PageRouterButton
          key={pageRouterButton.name}
          name={pageRouterButton.name}
          activated={pageRouterButton.activated}
          router={pageRouterButton.router}
        />
      ))}
    </ButtonBox>
  )
}

export default PageRouterButtonBox
