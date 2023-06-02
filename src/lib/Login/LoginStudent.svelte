<script>
  import StudentVue from "studentvue";
  import { student } from "../stores.js";

  let uname;
  let pword;
  let msg = "";

  let stuName;
  let stuPhoto;

  const DISTRICT_URL = 'https://md-mcps-psv.edupoint.com/PXP2_Login.aspx';

  async function login() {
    try {
      const client = await StudentVue.login(DISTRICT_URL, { username: uname.value, password: pword.value });
      
      stuName = (await client.studentInfo()).student.name;
      stuPhoto = (await client.studentInfo()).photo;

      document.getElementById("msg").style.color = "black";
      msg = "Welcome, " + stuName + "!";

      student.update(state => ({...state, 
        name: stuName,
        photo: stuPhoto,
        loggedIn: true
      }));
    } catch (e) {
      document.getElementById("msg").style.color = "red";
      msg = "Incorrect Login";
      console.log(e.message);
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
      login();
    }
  });

</script>
  
<form class="login">
  <br><label for="login">Student Login</label><br><br>
  <label for="login_info">Please enter your MCPS ID and Password</label><br><br>
  
  <input type="text" placeholder="Enter MCPS ID" id="uname" bind:this={uname}>
  <input type="password" placeholder="Enter Password" id="pword" bind:this={pword}><br>
  <input type="checkbox" on:click={showPass}>Show Password<br>
  
  <button type="button" on:click={login} id="login_button">Login</button><br>
  <p id="msg"> {msg} </p>
</form>

<style>
  form.login {
    text-align: center;
    border: 3px solid #f1f1f1;
    background-color: white;
    margin: 80px auto; 
    width: 30%;
    height: auto;
  }

  form.login label {
    text-align: center;
    font-size: 20px;
    margin: 20px;
  }

  form.login label[for="login"] {
    font-size: 30px;
    font-weight: bold;
  }

  form.login input[type=text], input[type=password] {
    width: 80%;
    padding: 12px 15px; /* Inside */
    margin: 5px 0; /* Outside */
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  form.login input[type=checkbox] {
    margin: 5px;
  }

  form.login button {
    background-color: #be965cff;
    color: white;
    padding: 14px 20px;
    margin: 20px 0;
    border-style: 1px solid #ccc;
    cursor: pointer;
    width: 20%;
  }

  form.login button:hover {
    background-color: #917347ff;    
  }
</style>