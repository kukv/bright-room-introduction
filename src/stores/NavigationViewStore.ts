import { create, useStore } from 'zustand'

type NavigationViewStore = {
  isView: boolean
  viewSwitch: (flg: boolean) => void
}

export const useNavigationViewStore = create<NavigationViewStore>((set) => ({
  isView: false,
  viewSwitch: (flg) => set(() => ({ isView: flg })),
}))
