import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import PageRouterButton, { PageRouterButtonProps } from './PageRouterButton'


const ButtonBox = styled(Box)({
  display: 'flex',
  gap: '10px',
})


function PageRouterButtonBox() {
  const navigate = useNavigate()
  const [activatedMelting, setActivatedMelting] = useState<boolean>(false)
  const [activatedElement, setActivatedElement] = useState<boolean>(false)

  const pageRouterButtons: PageRouterButtonProps[] = [
    {
      name: '용해',
      activated: activatedMelting,
      router: () => {
        setActivatedMelting(true)
        setActivatedElement(false)
        navigate('/melting')
      },
    },
    {
      name: '성분',
      activated: activatedElement,
      router: () => {
        setActivatedMelting(false)
        setActivatedElement(true)
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
