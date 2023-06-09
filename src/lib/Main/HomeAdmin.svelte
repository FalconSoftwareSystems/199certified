<script>
  import AdminDir from "../../assets/General/FSS_AdminDir.png"
  function ssLogin() {
    window.open("https://docs.google.com/spreadsheets/d/1EXdiIDp1cPmzDEZnREbAz26SPNM1Q8Jx-SHl2cWsusQ/edit#gid=2007927826", "_blank");
  }

  function manual() {
    window.open("https://docs.google.com/document/d/13Y1-QAPdU9qPOMUW_3XDhM5tFH-wmTRFJLW1Od819BU/edit?usp=sharing", "_blank");
  }

</script>

<div id="topbar">
  <ul>
    <li><button type="button" id="ss_button" on:click={ssLogin}>Open Spreadsheet</button></li>
    <li><button type="button" id="manual_button" on:click={manual}>Open User Manual</button></li>
    <li><img src={AdminDir} alt="Band Saw"></li>
  </ul>
  
  
</div>

<style>
#topbar ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  height: 45px;
  width: 100%;
}

#topbar li button#ss_button  {
  margin: 150px auto 0px auto;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: #231f20ff;
  border: 1px solid white; 
}

#topbar li button#ss_button:hover {
  background-color: rgb(83, 83, 83);
  border: 1px solid white; 
}

#topbar li button#manual_button  {
  margin: 20px auto 0px auto;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: #231f20ff;
  border: 1px solid white; 
}

#topbar li button#manual_button:hover {
  background-color: rgb(83, 83, 83);
  border: 1px solid white; 
}

#topbar li img {
  display: block;
  margin: 20px auto 0px auto;
}
</style>