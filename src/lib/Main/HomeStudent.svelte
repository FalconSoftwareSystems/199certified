<script>
  import { student } from "../stores.js";

  import BasicSafety from "../../assets/Tools/1BasicSafety.png";
  import BandSaw from "../../assets/Tools/2BandSaw.png"
  import BeltSander from "../../assets/Tools/3BeltSander.png"
  import ElectricDrill from "../../assets/Tools/4ElectricDrill.png";
  import DrillPress from "../../assets/Tools/5DrillPress.png"
  import ScrollSaw from "../../assets/Tools/6ScrollSaw.png"
  // import SaberSaw from "../../assets/Tools/7SaberSaw.png";
  import MiterSaw from "../../assets/Tools/8MiterSaw.png";
  // import Finishing Sander from "../../assets/Tools/9FinishingSander.png";
  // import CircularSaw from "../../assets/Tools/10CircularSaw.png";
  import TableSaw from "../../assets/Tools/11TableSaw.png";
  import printers3D from "../../assets/Tools/12printers3D.png";
  import cartBG from "../../assets/Tools/13cartBG.png"

  import Filler from "../../assets/Tools/filler.png";

</script>

<div class="wrapper">
    <div class="grid">
        <div id="basic-safety" class="tool">
          <p>Basic Safety</p>
          <p class="indicator">Certified ✔</p>
          <img src={BasicSafety} alt="Basic Safety"> </div>
        <div id="band-saw" class="tool">
          <p>Band Saw</p>
          <p class="indicator">Certified ✔</p>
          <img src={BandSaw} alt="Band Saw"> </div>
        <div id="belt-sander" class="tool">
          <p>Belt Sander</p>
          <p class="indicator">Certified ✔</p>
          <img src={BeltSander} alt="Belt Sander"> </div>
        <div id="electric-drill" class="tool">
          <p>Electric Drill</p>
          <p class="indicator">Certified ✔</p>
          <img src={ElectricDrill} alt="Electric Drill"> </div>
        <div id="drill-press" class="tool">
          <p>Drill Press</p>
          <p class="indicator">Certified ✔</p>
          <img src={DrillPress} alt="Drill Press"> </div>
        <div id="scroll-saw" class="tool">
          <p>Scroll Saw</p>
          <p class="indicator">Certified ✔</p>
          <img src={ScrollSaw} alt="Scroll Saw"> </div>
        <div id="saber-saw" class="tool">
          <p>Saber Saw</p>
          <p class="indicator">Certified ✔</p>
          <!-- <img src={SaberSaw} alt="Saber Saw">  --> </div>
        <div id="miter-saw" class="tool">
          <p>Miter Saw</p>
          <p class="indicator">Certified ✔</p>
          <img src={MiterSaw} alt="Miter Saw"> </div>
        <div id="finishing-sander" class="tool">
          <p>Finishing Sander</p>
          <p class="indicator">Certified ✔</p>
          <!-- <img src={FinishingSander} alt="Finishing Sander"> --> </div> 
        <div id="circular-saw" class="tool">
          <p>Circular Saw</p>
          <p class="indicator">Certified ✔</p>
          <!-- <img src={CircularSaw} alt="Circular Saw"> --> </div> 
        <div id="table-saw" class="tool">
          <p>Table Saw</p>
          <p class="indicator">Certified ✔</p>
          <img src={TableSaw} alt="Table Saw"> </div>
        <div id="printers-3D" class="tool">
          <p id="printerTag">3D Printers</p>
          <p class="indicator">Certified ✔</p>
          <img src={printers3D} alt="3D Printers"> </div>
        <div id="cart-bg" class="tool">
          <p id="cartBGTag">B&G Cart</p>
          <p class="indicator">Certified ✔</p>
          <img src={cartBG} alt="Black and Gold Cart"> </div>
    </div>
</div>    

<style>

/* General */
.grid {
  display: grid;
  margin-left: 270px;
  margin-top: 150px;
  grid-template-rows: 485px 485px 485px 485px;
  grid-template-columns: 300px 300px 300px 300px;
}

.grid .tool {
  width: 275px;
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

.grid p.indicator{
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

.grid img {
  height: 300px;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}

/* Specific Tools */
.grid #printers-3D {
  background: white;
  border-color: black;
}

.grid #printers-3D #printerTag {
  color: black;
}

.grid #cart-bg {
  background: #917347ff;
}

</style>