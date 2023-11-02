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
  borderColor: activated ? '#90CAF9' : '#FFFFFF',
  borderRadius: '5px',
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
      {props.activated}
    </RouterButton>
  )
}

export default PageRouterButton
