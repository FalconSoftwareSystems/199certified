 <!--
 
 <script>
    import StudentVue from "studentvue";
    import { student } from "../stores.js";

    let msg = "";

    msg = "Welcome, " + $student.name;


</script>
<div class="wrapper">
    <div class="sidebar">
        <ul>
            <li><p>9:41:00 AM</p></li>
            <li><p>R&E, Block A</p></li>
            <li><img class = "student-photo-img" src="assets/Tools/brian.jpg" alt="Student ID"></li>
            <li><p>Andrew<br>Kendall</p></li>
            <li><p>123456</p></li>
        </ul>
    </div>
    <div class="certification-statuses">
        <div class="basic-safety">
            <p>Basic Safety</p>
            <div class = "basic-safety-indicator">
                <p>Certified ✔</p>
            </div>
            <img class = "basic-safety-img" src="../../assets/Tools/Belt_Sander_2.JPG" alt="Basic Safety">
        </div>
        <div class="band-saw">
            <p>Band Saw</p>
            <div class = "band-saw-indicator">
                <p>Not Certified ✘</p>
            </div>
            <img class = "band-saw-img" src="../../assets/Tools/Band_Saw_1.JPG" alt="Band Saw">
        </div>
        <div class="miter-saw">
            <p>Miter Saw</p>
            <div class = "miter-saw-indicator">
                <p>Certified ✔</p>
            </div>
            <img class = "miter-saw-img" src="assets/Tools/Miter_Saw_1.JPG" alt="Miter Saw">
        </div>
        <div class="belt-sander">
            <p>Belt Sander</p>
            <div class = "belt-sander-indicator">
                <p>Certified ✔</p>
            </div>
            <img class = "belt-sander-img" src="assets/Tools/Belt_Sander_2.JPG" alt="Belt Sander">
        </div>
        <div class="drill-press">
            <p>Drill Press</p>
            <div class = "drill-press-indicator">
                <p>Certified ✘</p>
            </div>
            <img class = "drill-press-img" src="media/Drill_Press_1.JPG" alt="Drill Press">
        </div>
    </div>
</div>    
<style>
.wrapper .sidebar{
  position: fixed;
  left: 0;
  top: 90px;
  width: 385px;
  height: 100%;
  background: #231F20;
  text-align: center;
}
.wrapper .sidebar ul{
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
}
.wrapper .sidebar p{
  padding: 5px;
  width: 285px;
  border: 3px solid white;
  text-align: center;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  font-size: 30px;
  font-weight: bold;
  background: black;
  color: white;
}
.wrapper .sidebar img{
  width: 285px;
  border: 3px solid white;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  background: black;
}

/* Certifications */

.wrapper .certification-statuses{
  display: grid;
  grid-template-rows: 760px 760px;
  grid-template-columns: 15px 15px 15px;
  margin-left: 360px;
}
.wrapper .certification-statuses .basic-safety{
  width: 455px;
  border: 3px solid white;
  text-align: center;
  margin-top: 10px;
  margin-left: 50px;
  font-size: 30px;
  font-weight: bold;
  background: black;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}
.wrapper .certification-statuses .basic-safety .basic-safety-indicator{
  height: 50px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
}
.wrapper .certification-statuses .basic-safety .basic-safety-img{
  height: 560px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
}

.wrapper .certification-statuses .band-saw{
  width: 455px;
  border: 3px solid white;
  text-align: center;
  margin-top: 10px;
  margin-left: 540px;
  height: 700;
  font-size: 30px;
  font-weight: bold;
  background: black;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
.wrapper .certification-statuses .band-saw .band-saw-indicator{
  height: 50px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: yellow;
  

}
.wrapper .certification-statuses .band-saw .band-saw-img{
  height: 560px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
}

.wrapper .certification-statuses .miter-saw{
  width: 455px;
  border: 3px solid white;
  text-align: center;
  margin-top: 10px;
  margin-left: 50px;
  font-size: 30px;
  font-weight: bold;
  background: black;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
.wrapper .certification-statuses .miter-saw .miter-saw-indicator{
  height: 50px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
}
.wrapper .certification-statuses .miter-saw .miter-saw-img{
  height: 560px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
}

.wrapper .certification-statuses .belt-sander{
  width: 455px;
  border: 3px solid white;
  text-align: center;
  margin-top: 10px;
  margin-left: 50px;
  font-size: 30px;
  font-weight: bold;
  background: black;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}
.wrapper .certification-statuses .belt-sander .belt-sander-indicator{
  height: 50px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
}
.wrapper .certification-statuses .belt-sander .belt-sander-img{
  height: 560px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
}

.wrapper .certification-statuses .drill-press{
  width: 455px;
  border: 3px solid white;
  text-align: center;
  margin-top: 10px;
  margin-left: 50px;
  font-size: 30px;
  font-weight: bold;
  background: black;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}
.wrapper .certification-statuses .drill-press .drill-press-indicator{
  height: 50px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
}
.wrapper .certification-statuses .drill-press .drill-press-img{
  height: 560px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
}
</style>

-->
<table></table>
<script>
    fetch('https://script.google.com/macros/s/AKfycbyJMFNY2Ejp9TQ8xIutrB8UqnE09lSbZAu12PKpi4Dwtgi7HyIN4BzSC0weDlB59O1LzQ/exec')
    //getting actual json
    .then(res => res.json())
    //res is a callback arrow function to then, takes res.json to parse.
            .then(data => {
              //takes parsed json as parameter (data)
                let tr = data.content.reduce((prev, cur) => {
                    let td = cur.map(e => `<td>${e}</td>`)
                    return prev + `<tr>${td.join("")}</tr>`
                }, "\r")
                document.querySelector("table").innerHTML = tr;
                for (var i=0; i<tr.length; i++) {
                     tr[i].style.color = "red";
                }
            });
</script>


<!--ok guys there's abit of a problem
so basically to access that link u gottta bein mcps
and i cant put it on the github age
cause there isnt any way to google scripts to chck if we are in mcps or not
2 options, find something else lol
or
if kingman can access a spreadsheet that isnt owned by mcps, then we can make a new spreadsheeton fss gmail account
just call me ill explai-->

