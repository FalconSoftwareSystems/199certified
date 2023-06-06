<script>
    import { onMount } from "svelte"; // Clock
    import { student } from "../stores.js";

    let userPhoto = 'data:image/png;base64,' + $student.photo; // Student Photo src
    let currentTime = new Date().toLocaleTimeString(); // Local Time Variable

    onMount(() => {
        setInterval(() => {
            currentTime = new Date().toLocaleTimeString(); // Getting local time
        }, 1000);
    });
</script>

<div class="sidebar">
    <ul>
        <li><p>{currentTime}</p></li> 
        <li><p>R&E, Block A</p></li> 
        <li><img class = "student-photo-img" src={userPhoto} alt="Student ID"></li>
        <li><p>{$student.name}</p></li> 
        <li><p>{$student.ID}</p></li>
    </ul>
</div>

<style>
.sidebar {
    position: fixed;
    top: 138px;
    width: fit-content;
    height: 100%;
    padding: 10px;
    background: rgb(92, 91, 91); /* 231F20 */
}

.sidebar ul{
    list-style: none;
    padding: 10px;
    margin: 0px;
}

.sidebar li p{
    padding: 2px;
    width: 250px;
    border: 2px solid white;
    text-align: center;
    margin: 0px auto 10px auto; /* top right bottom left*/
    font-size: 20px;
    background: black;
    color: white;
    overflow: auto;
}

.sidebar li img{
    width: 250px;
    border: 2px solid white;
    margin: 0px auto 10px auto; /* top right bottom left*/
    background: black;
}
</style>