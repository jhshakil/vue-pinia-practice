import { defineStore } from "pinia";
import { useAuthStore } from "./Auth";

export const UseCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    getters: {
        digitLength: (state) => state.count.toString().length
    },
    actions: {
        increment() {
            if (this.isAuthenticated()) {
                this.count++;
            }

        },
        decrement() {
            if (this.count <= 0) return;
            if (this.isAuthenticated()) {
                this.count--;
            }
        },
        isAuthenticated() {
            const authenticated = useAuthStore()
            return authenticated.isAuthenticated
        }
    }
})