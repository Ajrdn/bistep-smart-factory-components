import React, { useState } from 'react'
import useUserStore from 'store/useUserStore'
import { styled } from '@mui/material/styles'
import UserProfileBox, { ProfileIcon } from './UserProfileBox'


const HeaderProfileIcon = styled(ProfileIcon)({
  width: '38px',
  height: '38px',
  margin: '0 30px',
  fontSize: '17px',
})


function UserProfile() {
  const profileName = useUserStore(state => state.profileName)

  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <HeaderProfileIcon
        alt='유저 프로필'
        onClick={() => setOpen(true)}
      >
        {profileName}
      </HeaderProfileIcon>
      <UserProfileBox
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default UserProfile
