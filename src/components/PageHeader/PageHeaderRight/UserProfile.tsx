import React from 'react'
import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'


const Profile = styled(Avatar)({
  width: '38px',
  height: '38px',
  margin: '0 30px',
  backgroundColor: '#0F3D7A',
  fontSize: '17px',
  fontFamily: 'Pretendard',
  fontWeight: 500,
})


function UserProfile() {
  return (
    <Profile alt='유저 이미지'>김</Profile>
  )
}

export default UserProfile
