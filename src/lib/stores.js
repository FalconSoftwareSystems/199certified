import { writable } from 'svelte/store';

export let student = writable({
    name: undefined,
    photo: undefined,
    ID: undefined,
    loggedIn: false,
    admin: false,

    tools: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    toolCols: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    toolNames: ["Basic Safety", "Band Saw", "Belt Sander", "Portable Electric Drill", "Drill Press",
                "Scroll Saw", "Saber Saw", "Miter Saw", "Finishing Sander", "Circular Saw", "Table Saw",
                "3D Printers", "Black and Gold Cart"],
    toolPos: 0,

    class: "N/A",
    updated: false
});

export function resetStudent() {
    student.set({
        name: undefined,
        photo: undefined,
        ID: undefined,
        loggedIn: false,
        admin: false,
        
        tools: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        toolCols: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        toolNames: ["Basic Safety", "Band Saw", "Belt Sander", "Portable Electric Drill", "Drill Press",
                    "Scroll Saw", "Saber Saw", "Miter Saw", "Finishing Sander", "Circular Saw", "Table Saw",
                    "3D Printers", "Black and Gold Cart"],
        toolPos: 0,

        class: "N/A",
        updated: false
    })
}