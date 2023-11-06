import React from 'react'
import useAlarmModalStore from 'store/useAlarmModalStore'
import Button from '@mui/material/Button'


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
    <Button
      variant='outlined'
      onClick={sendAlarm}
      disabled={title === '' || content === '' ? true : false}
      sx={{
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
          borderColor: '#13243A',
        },
      }}
    >
      보내기
    </Button>
  )
}

export default AlarmModalBottomButton
