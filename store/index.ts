import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: 'Songklod Sangvoratip'
  }),
  getters: {
    firstname(): string | undefined {
      return this.user.split(' ')[0]
    },
    lastname(): string | undefined {
      return this.user.split(' ')[1]
    }
  },
  actions: {
    updateName(value: string) {
      this.user = value
    }
  }
})
