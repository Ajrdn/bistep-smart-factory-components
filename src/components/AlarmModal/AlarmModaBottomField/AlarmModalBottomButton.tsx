import React from 'react'
import useAlarmModalStore from 'store/useAlarmModalStore'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'


const BottomButton = styled(Button)({
  width: '100px',
  height: '40px',
  borderRadius: '5px',
  color: '#13243A',
  borderColor: '#13243A',
  fontSize: '15px',
  fontFamily: 'Pretendard',
  fontWeight: 500,
  textAlign: 'center',
  '&:hover': {
    borderColor: '#13243A'
  },
})


function AlarmModalBottomButton() {
  const setOpen = useAlarmModalStore(state => state.setOpen)
  const title = useAlarmModalStore(state => state.title)
  const setTitle = useAlarmModalStore(state => state.setTitle)
  const content = useAlarmModalStore(state => state.content)
  const setContent = useAlarmModalStore(state => state.setContent)
  const setTarget = useAlarmModalStore(state => state.setTarget)

  const sendAlarm = () => {
    setTitle('')
    setContent('')
    setTarget('전체 공정')

    setOpen()
  }

  return (
    <BottomButton
      variant='outlined'
      onClick={sendAlarm}
      disabled={title === '' || content === '' ? true : false}
    >
      보내기
    </BottomButton>
  )
}

export default AlarmModalBottomButton
