<script>
    import StudentVue from "studentvue";
    import { student } from "../stores.js";

    let msg = "";

    msg = "Welcome, " + $student.name;


</script>
    
<h1>{msg}</h1>
  
<style>
h1 {
    color: white;
}
</style>