import { create } from 'zustand'


interface useUserState {
  profileName: string
  name: string
  position: string
  isAdmin: boolean

  setProfileName: (newProfileName: string) => void

  setname: (newname: string) => void

  setPosition: (newPosition: string) => void

  setIsAdmin: (newIsAdmin: boolean) => void
}


const useUserStore = create<useUserState>(set => ({
  profileName: '김',
  name: '김기가',
  position: '대리',
  isAdmin: true,

  setProfileName: (newProfileName: string) => set({profileName: newProfileName}),

  setname: (newname: string) => set({profileName: newname}),

  setPosition: (newPosition: string) => set({profileName: newPosition}),

  setIsAdmin: (newIsAdmin: boolean) => set({isAdmin: newIsAdmin}),
}))

export default useUserStore
