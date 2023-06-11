<script>
  import AdminDir from "../../assets/General/FSS_AdminDir.png";
  import AdminDirTest from "../../assets/General/FSS_AdminDirTest.png";

  function openExample() {
    window.open("https://docs.google.com/spreadsheets/d/1qCSkNDj23x4ldw5TFEkTeUn7roN_h5WL7udiA3OQiH4/edit#gid=0", "_blank");
  }
</script>

<div class="dir">
  <div class="child" id="spreadsheet">
    <h1>199% Certified Spreadsheet</h1>
    <img src={AdminDir} alt="Admin Directions">
  </div>
  <div class="child" id="canvas">
    <h1>Safety Test Naming Conventions</h1>
    <img src={AdminDirTest} alt="Admin Safety Test Directions">
    <button type="button" on:click={openExample} id="ex">EXAMPLE SPREADSHEET DATA</button>
  </div>
</div>

<style>
.dir {
  margin-top: 150px;
  text-align: center;
}

.dir .child {
  display: inline-block;
  vertical-align: middle;
}

.dir #spreadsheet {
  background-color: #434343ff;
  margin: 10px;
  float: left;
  height: auto;
  width: 50%;
  border: 1px solid white;
}
.dir #spreadsheet h1{
  text-align: center;
  padding: 10px;
  color: white;
}

.dir #spreadsheet img {
  display: block;
  width: 100%;
  height: auto;
}

.dir #canvas {
  background-color: white;
  margin: 10px;
  float: left;
  height: auto;
  width: 45%;
  border: 1px solid white;
}
.dir #canvas h1{
  text-align: center;
  padding-top: 10px;
  color: black;
}

.dir #canvas img {
  display: block;
  width: 100%;
  height: auto;
}

.dir #canvas button{
  display: block;
  width: 35%;
  height: auto;
  text-align: center;
  margin: 10px auto;
  background-color: #0F9D58;
  color: white;
  border-radius: 10px;
}

.dir #canvas button:hover{
  background-color: #0e844b;
}
</style>