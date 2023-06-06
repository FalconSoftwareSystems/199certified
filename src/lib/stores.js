import { writable } from 'svelte/store';

export let student = writable({
    name: undefined,
    photo: undefined,
    ID: undefined,
    loggedIn: false,
    admin: false
})

export function resetStudent() {
    student.set({
        name: undefined,
        photo: undefined,
        ID: undefined,
        loggedIn: false,
        admin: false
    })
}