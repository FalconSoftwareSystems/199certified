<script>
  import { student } from "./lib/stores.js";
  import LoginAdmin from "./lib/Login/LoginAdmin.svelte";
  import LoginStudent from "./lib/Login/LoginStudent.svelte";
  import HomeAdmin from "./lib/Main/HomeAdmin.svelte";
  import HomeStudent from "./lib/Main/HomeStudent.svelte";


  import NavBar from "./lib/Style/NavBar.svelte";

</script>

<body>
  {#if !$student.loggedIn}
    <NavBar />
    <LoginStudent />
  {:else} 
    <NavBar />
    <HomeStudent />
  {/if}

</body>