<script>
  import { student } from "./lib/stores.js";
  import LoginAdmin from "./lib/Login/LoginAdmin.svelte";
  import LoginStudent from "./lib/Login/LoginStudent.svelte";
  import HomeAdmin from "./lib/Main/HomeAdmin.svelte";
  import HomeStudent from "./lib/Main/HomeStudent.svelte";
  import NavBar from "./lib/Style/NavBar.svelte";
  import NewNavBar from "./lib/Style/NewNavBar.svelte";
  import SideBar from "./lib/Style/SideBar.svelte";
  import TopBar from "./lib/Style/TopBar.svelte";

</script>

<body>  
  {#if !$student.admin && $student.loggedIn}
    <NavBar title="Student Tool Certifications" bText="Sign Out"/>
    <SideBar />
    <HomeStudent />
  {:else if $student.admin && $student.loggedIn}
    <NewNavBar title="Admin Home" bText="Sign Out"/>
    <TopBar />
    <HomeAdmin />
  {:else if $student.admin}
    <NavBar title="199% Certified" bText="Student Login"/>
    <LoginAdmin />
  {:else} 
    <NavBar title="199% Certified" bText="Admin Login"/>
    <LoginStudent />
  {/if}

</body>