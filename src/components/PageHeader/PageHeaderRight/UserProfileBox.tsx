import React from 'react'
import { useNavigate } from 'react-router-dom'
import useUserStore from 'store/useUserStore'
import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useAlarmModalStore from 'store/useAlarmModalStore'


export const ProfileIcon = styled(Avatar)({
  width: '54px',
  height: '54px',
  backgroundColor: '#0F3D7A',
  fontSize: '23px',
  fontFamily: 'Pretendard',
  fontWeight: 500,
})


const ProfileBox = styled(Modal)({
  '.MuiModal-backdrop': {
    backgroundColor: 'transparent',
  },
})


const ProfileBoxContent = styled(Box)({
  width: '119px',
  minHeight: '165px',
  padding: '20px 0',
  backgroundColor: '#F2F2F2',
  boxShadow: '0px 0px 3px #00000052',
  borderRadius: '19px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '56px',
  right: '30px',
})


const ProfileBoxText = styled(Typography)({
  margin: '10px 0 15px',
  color: '#13243A',
  fontSize: '18px',
  fontFamily: 'Pretendard',
  fontWeight: 600,
})


const ProfileButton = styled(Button)({
  border: '1px solid #42A5F5',
  borderRadius: '5px',
  color: '#42A5F5',
  fontSize: '13px',
  fontFamily: 'Pretendard',
  fontWeight: 500,
  '&:hover': {
    borderColor: '#42A5F5',
  },
})


const LogoutButton = styled(ProfileButton)({
  height: '25px',
  padding: '5px 10px',
})


const AlarmButton = styled(ProfileButton)({
  padding: '1px 10px',
  marginTop: '20px',
})


interface UserProfileBoxProps {
  open: boolean
  onClose: () => void
}


function UserProfileBox(props: UserProfileBoxProps) {
  const navigate = useNavigate()

  const setOpen = useAlarmModalStore(state => state.setOpen)

  const profileName = useUserStore(state => state.profileName)
  const name = useUserStore(state => state.name)
  const position = useUserStore(state => state.position)
  const isAdmin = useUserStore(state => state.isAdmin)

  const logout = () => {
    navigate('/')
  }

  const sendAlarm = () => {
    setOpen()
    props.onClose()
  }

  return (
    <ProfileBox
      open={props.open}
      onClose={props.onClose}
      disablePortal
      disableAutoFocus
    >
      <ProfileBoxContent>
        <ProfileIcon alt='유저 프로필'>
          {profileName}
        </ProfileIcon>
        <ProfileBoxText>{name} {position}</ProfileBoxText>
        <LogoutButton
          variant='outlined'
          onClick={logout}
        >
          로그아웃
        </LogoutButton>
        {isAdmin &&
        <AlarmButton
          variant='outlined'
          onClick={sendAlarm}
        >
          알림 보내기
        </AlarmButton>
        }
      </ProfileBoxContent>
    </ProfileBox>
  )
}

export default UserProfileBox
