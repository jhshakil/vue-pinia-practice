import { defineStore } from "pinia";

export const UseCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    getters: {
        digitLength: (state) => state.count.toString().length
    }
})