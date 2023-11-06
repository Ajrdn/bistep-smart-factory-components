import React from 'react'
import useAlarmModalStore from 'store/useAlarmModalStore'
import { styled } from '@mui/material/styles'
import ModalBackground from 'components/ModalComponent/ModalBackground'
import ModalContentBox from 'components/ModalComponent/ModalContentBox'
import ModalCloseButton from 'components/ModalComponent/ModalCloseButton'
import ModalTitle from 'components/ModalComponent/ModalTitle'
import AlarmModalTitleField from './AlarmModalTitleField'
import AlarmModalContentField from './AlarmModalContentField'
import AlarmModalBottomField from './AlarmModaBottomField/AlarmModalBottomField'


const AlarmModalContentBox = styled(ModalContentBox)({
  borderRadius: '25px',
  backgroundColor: 'white',
  width: '800px',
  height: '592px',
  padding: '60px 50px 70px',
})


const AlarmModalTitle = styled(ModalTitle)({
  marginBottom: '40px',
})


function AlarmModal() {
  const open = useAlarmModalStore(state => state.open)
  const setOpen = useAlarmModalStore(state => state.setOpen)
  const setTitle = useAlarmModalStore(state => state.setTitle)
  const setContent = useAlarmModalStore(state => state.setContent)
  const setTarget = useAlarmModalStore(state => state.setTarget)

  const setClose = () => {
    setTitle('')
    setContent('')
    setTarget('전체 공정')
    setOpen()
  }

  return (
    <ModalBackground
      open={open}
      onClose={setClose}
    >
      <AlarmModalContentBox>
        <AlarmModalTitle>알림 보내기</AlarmModalTitle>
        <AlarmModalTitleField />
        <AlarmModalContentField />
        <AlarmModalBottomField />
        <ModalCloseButton
          size='30px'
          position='10px'
          color='#878787'
          backgroundColor='#EFEFEF'
          onClick={setClose}
        />
      </AlarmModalContentBox>
    </ModalBackground>
  )
}

export default AlarmModal
