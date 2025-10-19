// src/stores/useUserStore.ts
// 사용 예시 코드
import { create } from 'zustand'

interface UserState {
    nickname: string
    setNickname: (name: string) => void
}

export const useUserStore = create<UserState>((set) => ({
    nickname: '',
    setNickname: (nickname) => set({ nickname }),
}))
