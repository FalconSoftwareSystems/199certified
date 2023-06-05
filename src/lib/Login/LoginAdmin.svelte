<script>
    import { student } from "../stores.js";

    let pword;
    let msg = "";
  
    function adLogin() {;
      if (pword.value == '1234') {
        msg = "Logged In!";
      } else {
        msg = "Incorrect Login";
      }
    }
  
    function showPass() {
      if (pword.type === "password") {
        pword.type = "text";
      } else {
        pword.type = "password";
      }
    }
  
    document.addEventListener("keyup", function(event) {
      if (event.code === 'Enter') {
        adLogin();
      }
    });
  
  </script>
  
  <form class="loginAd">
    <br><label for="login">Admin Login</label><br><br>

    <input type="password" placeholder="Enter Password" id="pword" bind:this={pword}><br>   
    <input type="checkbox" on:click={showPass}>Show Password<br>

    <button type="button" id="login_button" on:click={adLogin}>Login</button><br>
    <p>{msg}</p>
</form>

  <style>
    form.loginAd {
      text-align: center;
      border: 3px solid #f1f1f1;
      background-color: white;
      margin: 80px auto; 
      width: 30%;
      height: auto;
    }
  
    form.loginAd label {
      text-align: center;
      font-size: 20px;
      margin: 20px;
    }
  
    form.loginAd label[for="login"] {
      font-size: 30px;
      font-weight: bold;
    }
  
    form.loginAd input[type=password], input[type=text] {
      width: 80%;
      padding: 12px 15px; /* Inside */
      margin: 5px 0; /* Outside */
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
  
    form.loginAd input[type=checkbox] {
      margin: 5px;
    }
  
    form.loginAd button {
      background-color: #be965cff;
      color: white;
      padding: 14px 20px;
      margin: 20px 0;
      border-style: 1px solid #ccc;
      cursor: pointer;
      width: 20%;
    }
  
    form.loginAd button:hover {
      background-color: #917347ff;    
    }
  </style>