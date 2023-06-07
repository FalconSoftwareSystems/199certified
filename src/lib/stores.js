import { writable } from 'svelte/store';

export let student = writable({
    name: undefined,
    photo: undefined,
    ID: undefined,
    loggedIn: false,
    admin: false,
    tools: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
});

export function resetStudent() {
    student.set({
        name: undefined,
        photo: undefined,
        ID: undefined,
        loggedIn: false,
        admin: false,
        tools: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    })
}