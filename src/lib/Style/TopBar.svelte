<script>
  function ssLogin() {
    window.open("https://www.geeksforgeeks.org", "_blank");
  }

</script>

<div id="topbar">
  <button type="button" id="ss_button" on:click={ssLogin}>Open Spreadsheet</button><br>
</div>

<style>
#topbar {
  margin-top: 200px;
}

#topbar button #ss_button {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: right;
  background-color: #be965cff;
  border: 0; 
}
</style>