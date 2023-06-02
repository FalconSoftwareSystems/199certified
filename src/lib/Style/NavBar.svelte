<script>
    import fssLogo from '../../assets/FSS_Logo.png'
    import LoginAdmin from '../Login/LoginAdmin.svelte'
    import { student } from "../stores.js"
    export let bText;
    export let title;

  function adminClick() {
    if (!$student.admin) {
      student.update(state => ({...state, 
        admin: true
      }));
    } else {
      student.update(state => ({...state, 
        admin: false
      }));
    }
  }

</script>

<body>
    <header>
      <nav>
        <ul>
          <li><img src={fssLogo} alt="FSS_Logo"/></li>
          <li><center><h1>{title}</h1></center></li>
          <li><button type="button" on:click={adminClick} class="admin_button">{bText}</button></li>
        </ul>
      </nav>  
    </header>
</body>

<style>
header {
  background-color: #0d0d0d; 
  margin: 0;
  padding: 5px;
  text-align: center;
}

header h1 {
  color: white;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  top: 0;
}

nav img {
  float: left;
  padding: 5px 10px;
  height: 45px;
  width: auto;
}

nav h1 {
  color: white;
  text-align: center;
}

nav li button {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border: none;
}

nav button:hover {
  background-color: #0d0d0d;    
}

nav li button.admin_button {
  float: right;
  background-color: #be965cff;    
}

nav li button.admin_button:hover {
  background-color: #917347ff;    
}
</style>