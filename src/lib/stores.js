import { writable } from 'svelte/store';

export let student = writable({
    name: undefined,
    photo: undefined,
    ID: undefined,
    loggedIn: false,
})