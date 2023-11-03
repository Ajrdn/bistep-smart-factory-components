import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'


interface RouterButtonProps {
  activated: boolean
}


const RouterButton = styled(Button)<RouterButtonProps>(({ activated }) => ({
  width: '76px',
  height: '40px',
  color: activated ? '#90CAF9' : '#FFFFFF',
  border: `1px solid ${activated ? '#90CAF9' : '#FFFFFF'}`,
  borderRadius: '5px',
  fontSize: '15px',
  fontFamily: 'Pretendard',
  fontWeight: 500,
}))


export interface PageRouterButtonProps {
  name: string
  activated: boolean
  router: () => void
}


function PageRouterButton(props: PageRouterButtonProps) {
  return (
    <RouterButton
      activated={props.activated}
      onClick={props.router}
    >
      {props.name}
    </RouterButton>
  )
}

export default PageRouterButton
