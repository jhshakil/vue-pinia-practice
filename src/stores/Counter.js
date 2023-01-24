import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useAuthStore } from "./Auth";

export const UseCounterStore = defineStore('counter', () => {
    const count = ref(0);
    const digitLength = computed(() => {
        return count.value.toString().length
    })
    function increment() {
        if (isAuthenticated()) {
            this.count++;
        }
    }
    function decrement() {
        if (this.count <= 0) return;
        if (isAuthenticated()) {
            this.count--;
        }
    }
    function isAuthenticated() {
        const authenticated = useAuthStore()
        return authenticated.isAuthenticated
    }

    return { count, increment, decrement, digitLength };
})