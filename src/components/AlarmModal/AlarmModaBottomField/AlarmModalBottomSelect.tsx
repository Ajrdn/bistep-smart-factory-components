import React from 'react'
import useAlarmModalStore from 'store/useAlarmModalStore'
import { styled } from '@mui/material/styles'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Target from 'interfaces/Target'


const BottomSelect = styled(Select)({
  width: '328px',
  height: '100%',
  color: '#878787',
  fontSize: '18px',
  fontFamily: 'Pretendard',
  fontWeight: 400,
})


const BottomMenuItem = styled(MenuItem)({
  color: '#878787',
  fontSize: '18px',
  fontFamily: 'Pretendard',
  fontWeight: 400,
})


function AlarmModalBottomSelect() {
  const target = useAlarmModalStore(state => state.target)
  const setTarget = useAlarmModalStore(state => state.setTarget)

  const targetChange = (event: SelectChangeEvent<unknown>) => {
    const menu = event.target.value

    if (
      menu === '생산관리' ||
      menu === '용해' ||
      menu === '슬라브 절단' ||
      menu === '슬라브 가열' ||
      menu === '가열 압연' ||
      menu === '전체 공정'
    )
      setTarget(menu)
  }

  const menuList: Target[] = [
    '생산관리',
    '용해',
    '슬라브 절단',
    '슬라브 가열',
    '가열 압연',
    '전체 공정',
  ]

  return (
    <BottomSelect
      value={target}
      onChange={targetChange}
    >
      {menuList.map(menu => (
        <BottomMenuItem
          key={menu}
          value={menu}
        >
          {menu}
        </BottomMenuItem>
      ))}
    </BottomSelect>
  )
}

export default AlarmModalBottomSelect
