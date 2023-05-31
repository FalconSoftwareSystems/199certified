<script>
  import fssLogo from './assets/FSS_Logo.png'

  let uname;
  let pword;

  function showPass() {
    if (pword.type === "password") {
      pword.type = "text";
    } else {
      pword.type = "password";
    }
  }
</script>

<body>
  <header>
    <h1>199% Certified</h1>
  </header>
    
  <!-- Navigation Bar -->
  <nav>
    <ul>
      <li><img src = {fssLogo} alt="FSS_Logo"/></li>
      <li><a href="adminLogin.html" class="login_button">Admin Login</a></li>
    </ul>
  </nav>
  
  <!-- Sign-In Form -->
  <form class="login">
    <br><label for="login">Student Login</label><br><br>
    <label for="login_info">Please enter your MCPS ID and Password</label><br><br>
  
    <input type="text" placeholder="Enter MCPS ID" id="uname" bind:this={uname}>
    <input type="password" placeholder="Enter Password" id="pword" bind:this={pword}><br>
    <input type="checkbox" on:click={showPass}>Show Password<br>
  
    <button type="submit" on:click>Login</button>
    <!-- <button type="submit" onclick="login()">Login</button> -->
    <script src="studentvue.js"></script>
  
  </form>
</body>