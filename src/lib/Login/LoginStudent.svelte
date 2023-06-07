<script>
  import StudentVue from "studentvue";
  import { student } from "../stores.js";

  let uname;
  let pword;
  let msg = "";

  let stuName;
  let stuPhoto;
  let stuID;

  const DISTRICT_URL = 'https://md-mcps-psv.edupoint.com/PXP2_Login.aspx';

  async function login() {
    document.getElementById("msg").style.color = "black";
    msg = "Loading...";
    try {
      // Send Username and Password to the StudentVUE API
      const client = await StudentVue.login(DISTRICT_URL, { username: uname.value, password: pword.value });
            
      console.log()
      // Get Student Info
      stuName = (await client.studentInfo()).student.name;
      stuPhoto = (await client.studentInfo()).photo;
      stuID = (await client.studentInfo()).id;

      // Update Student Info
      student.update(state => ({...state, 
        name: stuName,
        ID: stuID,
        photo: stuPhoto,
      }));

      // Get Spreadsheet Data and Update
      const response1 = await fetch("https://script.google.com/macros/s/AKfycbzgDL9OzGYA19fKDw2RGvYMPNGFgSLhE1cQau_mhiowINd00nzyvySRYeG5Beaj5mqR-A/exec");
      const classData1 = await response1.json();
      
      const response2 = await fetch("https://script.google.com/macros/s/AKfycbx7M2XJpWb088CoHJTdSY-VNYqPLyGCCnAvjBzi5XG4HOC5dOKRSkGEMCs7NzJ7UVDpFA/exec");
      const classData2 = await response2.json();

      const response3 = await fetch("https://script.google.com/macros/s/AKfycbwEZPNS2dhNkh57d467Rab7ihh-7oavdoqKJZFx9buGLCSdqV0lln9KaCbD4TiPvvxl/exec");
      const classData3 = await response3.json();

      let allClassData = [classData1, classData2, classData3];

      for (let classData of allClassData) {
        for (const studentInfo of classData.content) {
          if (!$student.updated && studentInfo[3] == "R&E") {
            student.update(state => ({...state, 
              class: "R&E",
              block: "Block " + studentInfo[4],
            }));
          } else if (!$student.updated && studentInfo[3] == "ADA") {
            student.update(state => ({...state, 
              class: "ADA",
              period: "Period " + studentInfo[5],
            }));
          }
          if (studentInfo[2] == $student.ID) {
            student.update(state => { 
              let updatedTools = [...state.tools];

              for (let tool = 1; tool <= 13; tool++) {
                updatedTools[tool-1] = studentInfo[tool+2];
              }
              return {...state, tools: updatedTools, updated: true};
            });
          }
        }
      }

      // Log the Student In
      student.update(state => ({...state, 
        loggedIn: true,
      }));

    } catch (e) {
      // If the Username or Password is Incorrect, then the error is caught and is displayed on the website
      document.getElementById("msg").style.color = "red";
      msg = "Incorrect Login";
      console.log(e.message);
    }
  }

  // Function for Show Password Button
  function showPass() {
    if (pword.type === "password") {
      pword.type = "text";
    } else {
      pword.type = "password";
    }
  }

  // Pressing "Enter" logs Student in
  document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
      login();
    }
  });

</script>
  
<form class="loginStu">
  <br><label for="login">Student Login</label><br><br>
  
  <input type="text" placeholder="Enter MCPS ID" id="uname" bind:this={uname}>
  <input type="password" placeholder="Enter Password" id="pword" bind:this={pword}><br>
  <input type="checkbox" on:click={showPass}>Show Password<br>
  
  <button type="button" on:click={login} id="login_button">Login</button><br>
  <p id="msg"> {msg} </p>
</form>

<style>
  form.loginStu {
    text-align: center;
    border: 3px solid #f1f1f1;
    background-color: white;
    margin: 250px auto 0px auto; 
    width: 30%;
    height: auto;
  }

  form.loginStu label {
    text-align: center;
    font-size: 20px;
    margin: 20px;
  }

  form.loginStu label[for="login"] {
    font-size: 30px;
    font-weight: bold;
  }

  form.loginStu input[type=text], input[type=password] {
    width: 80%;
    padding: 12px 15px; /* Inside */
    margin: 5px 0; /* Outside */
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  form.loginStu input[type=checkbox] {
    margin: 5px;
  }

  form.loginStu button {
    background-color: #be965cff;
    color: white;
    padding: 14px 20px;
    margin: 20px 0;
    border-style: 1px solid #ccc;
    cursor: pointer;
    width: 20%;
  }

  form.loginStu button:hover {
    background-color: #917347ff;    
  }
</style>