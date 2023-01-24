import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: true,
        user: {
            name: 'jahid',
            email: 'jahid@gmail.com'
        }
    }),
    actions: {
        logOut() {
            this.$patch((state) => {
                (state.isAuthenticated = false), (state.user = {});
            });
        },
        logIn() {
            this.$reset();
        }
    }
})