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

      // Get Spreadsheet Data for R&E
      const responseR = await fetch("https://script.google.com/macros/s/AKfycbwFVmptlteGWFyaIPCm8knbNi_J93GMq9_rV3WnsASA_pKOtBQ1BoF26ftUqZDKWvLv/exec");
      const classDataR = await responseR.json();

      // Get Spreadsheet Data for ADA
      const responseA = await fetch("https://script.google.com/macros/s/AKfycbxTvIMzrwGSSBzk4FLZrUTS5bt3G9wC-peniOg9OZLLCzV7i7S7tK4HjVOwIAm20EGZ/exec");
      const classDataA = await responseA.json();

      let allClassData = [classDataR, classDataA]

      // Loop through both Spreadsheets
      for (let classData of allClassData) {
        
        /* FINDING WHICH COLUMN EACH SAFETY TEST IS IN */
        let firstRow = classData.content[0];

        // Loop through every cell in the First Row (which has the safety quiz names)
        for (let pos = 5; pos < firstRow.length - 16; pos++) {
            // Loop through the array with every tool's name
            for (let toolIndex = 0; toolIndex < $student.toolNames.length; toolIndex++) {
              let tool = $student.toolNames[toolIndex];
              // If the cell has the tool's name, update the tool's "tool column" property
              if (firstRow[pos].includes(tool) && !firstRow[pos].includes("Corrections")) {
                student.update(state => {
                  let updatedToolCols = [...state.toolCols];
                  updatedToolCols[state.toolPos] = pos;
                  return {...state, toolCols: updatedToolCols};
                });
              }
              student.update(state => {
                let updatedToolPos = state.toolPos + 1;
                return {...state, toolPos: updatedToolPos};
              });
            }
            student.update(state => ({...state, 
              toolPos: 0,
            }));
        }
        
        /* UPDATING TOOL CERTIFICATION STATUSES */
        for (let stuInfoPos = 2; stuInfoPos < classData.content.length; stuInfoPos++) {
          let studentInfo = classData.content[stuInfoPos];

          if (studentInfo[3].includes($student.ID)) {
            for (let toolIndex = 0; toolIndex < $student.toolNames.length; toolIndex++) {
              let toolName = $student.toolNames[toolIndex];
              let toolCol = $student.toolCols[toolIndex];
              let toolMaxPts = classData.content[1][toolCol];

              // If the Tool has a Safety Quiz on Canvas, update the student's certifications
              if (toolCol != 0) {
                let score = studentInfo[toolCol]/toolMaxPts;
                if (score == 1) { 
                  student.update(state => {
                    let updatedTools = [...state.tools];
                    updatedTools[toolIndex] = 2; 
                    return {...state, tools: updatedTools};
                  });
                } else if (score < 1 && score > 0.5) {
                  student.update(state => {
                    let updatedTools = [...state.tools];
                    updatedTools[toolIndex] = 1; 
                    return {...state, tools: updatedTools};
                  });
                } else {
                  student.update(state => {
                    let updatedTools = [...state.tools];
                    updatedTools[toolIndex] = 0; 
                    return {...state, tools: updatedTools};
                  });
                }
              }
            }
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