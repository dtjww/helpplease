import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
    id: 'username',
    state: () => ({
        username: '',
        currentTask: '',
        email: ''
})
    ,persist: true,
})
