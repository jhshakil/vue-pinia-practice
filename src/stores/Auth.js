import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: true,
        user: {
            name: 'jahid',
            email: 'jahid@gmail.com'
        }
    })
})