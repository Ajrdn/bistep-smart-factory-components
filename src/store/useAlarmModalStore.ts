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

  setTitle: newTitle => set({title: newTitle}),

  setContent: newContent => set({content: newContent}),

  setTarget: newTarget => set({target: newTarget}),
}))

export default useAlarmModalStore
