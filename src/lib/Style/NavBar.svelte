<script>
    import fssLogo from '../../assets/General/FSS_Logo.png'
    import LoginAdmin from '../Login/LoginAdmin.svelte'
    import { resetStudent, student } from "../stores.js"
    export let bText;
    export let title;

  function click() {
    if (!$student.admin && !$student.loggedIn) {
      student.update(state => ({...state, 
        admin: true
      }));
    } else if ($student.admin && !$student.loggedIn) {
      student.update(state => ({...state, 
        admin: false
      }));
    } else {
      document.getElementById('btton').style.backgroundColor = "#917347ff";
      bText = "Signing out...";
      setTimeout(()=> {resetStudent()},1000);
    }
  }

</script>

<body>
  <header>
    <h1>{title}</h1>
  </header>
    
  <nav>
    <ul>
      <li><img src={fssLogo} alt="FSS_Logo"/></li>
      <li><button type="button" on:click={click} id="btton">{bText}</button></li>
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

nav li button {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: right;
  background-color: #be965cff;
  border: 0;    
}

nav li button:hover {
  background-color: #917347ff;
  cursor: pointer;    
}

nav img {
  float: left;
  padding: 5px 10px;
  height: 45px;
  width: auto;
}

</style>