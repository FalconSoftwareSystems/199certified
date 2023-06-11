<script>
  import fssLogo from '../../assets/General/FSS_Logo.png'
  import LoginAdmin from '../Login/LoginAdmin.svelte'
  import { resetStudent, student } from "../stores.js"
  export let bText;
  export let title;

function newClick() {
  console.log("worked")
  if (!$student.admin && !$student.loggedIn) {
    student.update(state => ({...state, 
      admin: true
    }));
  } else if ($student.admin && !$student.loggedIn) {
    student.update(state => ({...state, 
      admin: false
    }));
  } else {
    document.getElementById('Login').style.backgroundColor = "#917347ff";
    bText = "Signing out...";
    setTimeout(()=> {resetStudent()},500);
  }
}

function ssLogin() {
  window.open("https://docs.google.com/spreadsheets/d/1EXdiIDp1cPmzDEZnREbAz26SPNM1Q8Jx-SHl2cWsusQ/edit#gid=2007927826", "_blank");
}

  function manual() {
  window.open("https://docs.google.com/document/d/13Y1-QAPdU9qPOMUW_3XDhM5tFH-wmTRFJLW1Od819BU/edit?usp=sharing", "_blank");
}

</script>

<body>
<header>
  <h1>{title}</h1>
</header>
  
<nav>
  <ul>
    <li><img src={fssLogo} alt="FSS_Logo"/></li>
    <li><button type="button" class="other" id="ss_button" on:click={ssLogin}>Spreadsheet</button></li>
    <li><button type="button" class="other" id="manual_button" on:click={manual}>User Manual</button></li>
    <li><button type="button" on:click={newClick} id="Login">{bText}</button></li>
    
  </ul>
</nav>
</body>

<style>
header {
  top: 0px;
  position: fixed;
  background-color: #0d0d0d; 
  margin: 0;
  padding: 5px;
  text-align: center;
  height: 93px;
  width: 100%;
}

header h1 {
  color: white;
}

nav {
  position: fixed;
  top: 93px;
  width: 100%;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 45px;
  background-color: #231f20ff; /* 231f20ff */
  width: 100%;
  top: 0;
}

#ss_button {
  background-color: #0F9D58;
}

#ss_button:hover {
  background-color: #0e844b;
}

#Login {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: right;
  background-color: #be965cff;
  border: 0; 
}

#Login:hover {
  background-color: #917347ff;
  cursor: pointer;    
}

nav li button {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: left;
  background-color: #231f20ff;
  border: 0;
}

nav li button:hover {
  background-color: #0d0d0d;
  cursor: pointer;    
}


nav img {
  float: left;
  padding: 5px 10px;
  height: 45px;
  width: auto;
}

</style>