<script>
  import { student } from "../stores.js";

  import BasicSafety from "../../assets/Tools/1BasicSafety.png";
  import BandSaw from "../../assets/Tools/2BandSaw.png"
  import BeltSander from "../../assets/Tools/3BeltSander.png"
  import ElectricDrill from "../../assets/Tools/4ElectricDrill.png";
  import DrillPress from "../../assets/Tools/5DrillPress.png"
  import ScrollSaw from "../../assets/Tools/6ScrollSaw.png"
  import SaberSaw from "../../assets/Tools/7SaberSaw.png";
  import MiterSaw from "../../assets/Tools/8MiterSaw.png";
  import FinishingSander from "../../assets/Tools/9FinishingSander.png";
  import CircularSaw from "../../assets/Tools/10CircularSaw.png";
  import TableSaw from "../../assets/Tools/11TableSaw.png";
  import printers3D from "../../assets/Tools/12printers3D.png";
  import cartBG from "../../assets/Tools/13cartBG.png";

  let toolPage = ["indicator_zero","indicator_zero","indicator_zero",
              "indicator_zero","indicator_zero","indicator_zero",
              "indicator_zero","indicator_zero","indicator_zero",
              "indicator_zero","indicator_zero","indicator_zero",
              "indicator_zero"];

  for (let tool = 0; tool < 13; tool++) {
    if ($student.tools[tool] == 0) {
      toolPage[tool] = "indicator_zero";
    } else if ($student.tools[tool] == 1) {
      toolPage[tool] = "indicator_one";
    } else {
      toolPage[tool] = "indicator_two";
    }
  }
  
</script>

<div class="wrapper">
    <div class="grid">
        <div id="basic-safety" class="tool">
          <p>Basic Safety</p>
          <p class={toolPage[0]} id="basic-safety-p"></p>
          <img src={BasicSafety} alt="Basic Safety"> </div>
        <div id="band-saw" class="tool">
          <p>Band Saw</p>
          <p class={toolPage[1]} id="band-saw"></p>
          <img src={BandSaw} alt="Band Saw"> </div>
        <div id="belt-sander" class="tool">
          <p>Belt Sander</p>
          <p class={toolPage[2]} id="belt-sander"></p>
          <img src={BeltSander} alt="Belt Sander"> </div>
        <div id="electric-drill" class="tool">
          <p>Electric Drill</p>
          <p class={toolPage[3]} id="electric-drill"></p>
          <img src={ElectricDrill} alt="Electric Drill"> </div>
        <div id="drill-press" class="tool">
          <p>Drill Press</p>
          <p class={toolPage[4]} id="drill-press"></p>
          <img src={DrillPress} alt="Drill Press"> </div>
        <div id="scroll-saw" class="tool">
          <p>Scroll Saw</p>
          <p class={toolPage[5]} id="scroll-saw"></p>
          <img src={ScrollSaw} alt="Scroll Saw"> </div>
        <div id="saber-saw" class="tool">
          <p>Saber Saw</p>
          <p class={toolPage[6]} id="saber-saw"></p>
          <img src={SaberSaw} alt="Saber Saw">  </div>
        <div id="miter-saw" class="tool">
          <p>Miter Saw</p>
          <p class={toolPage[7]} id="miter-saw"></p>
          <img src={MiterSaw} alt="Miter Saw"> </div>
        <div id="finishing-sander" class="tool">
          <p>Finishing Sander</p>
          <p class={toolPage[8]} id="finishing-sander"></p>
          <img src={FinishingSander} alt="Finishing Sander"> </div> 
        <div id="circular-saw" class="tool">
          <p>Circular Saw</p>
          <p class={toolPage[9]} id="circular-saw"></p>
          <img src={CircularSaw} alt="Circular Saw"> </div> 
        <div id="table-saw" class="tool">
          <p>Table Saw</p>
          <p class={toolPage[10]} id="table-saw"></p>
          <img src={TableSaw} alt="Table Saw"> </div>
        <div id="printers-3D" class="tool" style="background-color:White; border-color: black">
          <p id="printerTag" style="color:Black">3D Printers</p>
          <p class={toolPage[11]} id="printers-3D"></p>
          <img src={printers3D} alt="3D Printers"> </div>
        <div id="cart-bg" class="tool" style="background-color:#917347ff">
          <p id="cartBGTag">B&G Cart</p>
          <p class={toolPage[12]} id="cart-bg"></p>
          <img src={cartBG} alt="Black and Gold Cart"> </div>
    </div>
</div>    

<style>

/* General */
.grid {
  display: grid;
  margin-left: 190px;
  margin-top: 140px;
  grid-template-rows: 485px 485px 485px 485px;
  grid-template-columns: 273px 273px 273px 273px;
}

.grid .tool {
  width: 275px;
  height: 487px;
  border: 3px solid white;
  text-align: center;
  margin-top: 10px;
  margin-left: 50px;
  font-weight: bold;
  background: black;
}

.grid .tool p {
  color: white;
  margin: 20px;
  font-size: 28px;
}

/* Not Certified */
.grid p.indicator_zero{
  font-size: 20px;
  height: 50px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
}

.grid p.indicator_zero:after {
  content: "Not Certified";
}

/* Needs Corrections */
.grid p.indicator_one{
  font-size: 20px;
  height: 50px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: yellow;
  color: black;
}

.grid p.indicator_one:after {
  content: "Needs Corrections";
}

/* Certified */
.grid p.indicator_two{
  font-size: 20px;
  height: 50px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
}

.grid p.indicator_two:after {
  content: "Certified";
}

.grid img {
  height: 300px;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}

</style>