import { create, useStore } from 'zustand'

type MobileMenuStore = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useMobileMenuStore = create<MobileMenuStore>((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
}))
