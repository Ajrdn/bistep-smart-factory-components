import { create } from 'zustand'
import Target from 'interfaces/Target'


interface useAlarmModalState {
  open: boolean
  title: string
  content: string
  target: Target

  setOpen: () => void
  
  setTitle: (newTitle: string) => void

  setContent: (newContent: string) => void

  setTarget: (newTarget: Target) => void
}


const useAlarmModalStore = create<useAlarmModalState>(set => ({
  open: false,
  title: '',
  content: '',
  target: '전체 공정',

  setOpen: () => set(state => ({open: !state.open})),

  setTitle: newTitle => set(state => ({title: newTitle})),

  setContent: newContent => set(state => ({content: newContent})),

  setTarget: newTarget => set(state => ({target: newTarget})),
}))

export default useAlarmModalStore
