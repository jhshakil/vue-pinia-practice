import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "first task", isFave: false },
            { id: 2, title: "second task", isFave: true },
        ],
        name: "jahid",
    })
})