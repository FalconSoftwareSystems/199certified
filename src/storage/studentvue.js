import StudentVue from 'studentvue';

const DISTRICT_URL = 'https://md-mcps-psv.edupoint.com/PXP2_Login.aspx';

let USERNAME = document.getElementById("uname").value;
let PASSWORD = document.getElementById("pword").value;

async function login() {
    try {
        let client = await StudentVue.login(DISTRICT_URL, { username: USERNAME, password: PASSWORD });
        window.location = "teacher.html";
    } catch {
        document.getElementById("demo").innerHTML = "FAIL";
    }
}