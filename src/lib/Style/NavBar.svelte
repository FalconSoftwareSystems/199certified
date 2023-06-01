<script>
    import fssLogo from '../../assets/FSS_Logo.png'
</script>

<body>
    <header>
      <h1>199% Certified</h1>
    </header>
      
    <nav>
      <ul>
        <li><img src = {fssLogo} alt="FSS_Logo"/></li>
        <li><a href="adminLogin.html" class="login_button">Admin Login</a></li>
      </ul>
    </nav>    
  
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
  background-color: #231f20ff;
  width: 100%;
  top: 0;
}

nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav a:hover {
  background-color: #0d0d0d;    
}

nav img {
  float: left;
  padding: 5px 10px;
  height: 45px;
  width: auto;
}

nav a.login_button {
  float: right;
  background-color: #be965cff;    
}

nav a.login_button:hover {
  background-color: #917347ff;    
}
</style>