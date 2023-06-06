<script>
  import { student } from "./lib/stores.js";
  import LoginAdmin from "./lib/Login/LoginAdmin.svelte";
  import LoginStudent from "./lib/Login/LoginStudent.svelte";
  import HomeAdmin from "./lib/Main/HomeAdmin.svelte";
  import HomeStudent from "./lib/Main/HomeStudent.svelte";
  import NavBar from "./lib/Style/NavBar.svelte";
  import SideBar from "./lib/Style/SideBar.svelte";

</script>

<body>  
  {#if !$student.admin && $student.loggedIn}
    <NavBar title="Student Home" bText="Sign Out"/>
    <SideBar />
    <HomeStudent />
  {:else if $student.admin && $student.loggedIn}
    <NavBar title="Admin Home" bText="Sign Out"/>
    <HomeAdmin />
  {:else if $student.admin}
    <NavBar title="199% Certified" bText="Student Login"/>
    <LoginAdmin />
  {:else} 
    <NavBar title="199% Certified" bText="Admin Login"/>
    <LoginStudent />
  {/if}

</body>