import React from 'react'
import InformDataStore from 'store/useAlarmModalStore'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const ContentField = styled(Box)({
  width: '100%',
  height: '258px',
  padding: '20px 30px 30px',
  border: '1px solid #C8C8C8',
  borderRadius: '4px',
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})


const ContentLabel = styled(Typography)({
  fontSize: '12px',
  fontFamily: 'Pretendard',
  fontWeight: 600,
  color: '#878787',
})


const ContentTextField = styled(TextField)({
  width: '640px',
  height: '184px',
  '& textarea': {
    fontSize: '16px',
    fontFamily: 'Pretendard',
    fontWeight: 400,
    color: '#C8C8C8',
  },
})


function AlarmModalContentField() {
  const content = InformDataStore(state => state.content)
  const setContent = InformDataStore(state => state.setContent)

  const contentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }

  return (
    <ContentField>
      <ContentLabel>알림 내용 작성</ContentLabel>
      <ContentTextField
        variant='standard'
        placeholder='알림 내용 작성'
        value={content}
        onChange={contentChange}
        multiline
        maxRows={8}
        InputProps={{
          disableUnderline: true,
        }}
      />
    </ContentField>
  )
}

export default AlarmModalContentField
