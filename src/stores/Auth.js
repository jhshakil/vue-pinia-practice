import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: {}
    }),
    getters: {
        fullName: (state) => `${state.user.first_name} ${state.user.last_name}`
    },
    actions: {
        logOut() {
            this.$patch((state) => {
                (state.isAuthenticated = false), (state.user = {});
            });
        },
        async logIn() {
            const res = await fetch('https://reqres.in/api/users/2');
            const { data } = await res.json();
            this.user = data;
            this.isAuthenticated = true;
            console.log(data);
        }
    }
})