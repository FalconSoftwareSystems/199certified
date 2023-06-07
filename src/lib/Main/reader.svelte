<!-- <script>
  import { student } from "../stores";

  logJSONData();

  async function logJSONData() {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyJMFNY2Ejp9TQ8xIutrB8UqnE09lSbZAu12PKpi4Dwtgi7HyIN4BzSC0weDlB59O1LzQ/exec");
    const classData = await response.json();
    for (const studentInfo of classData.content) {
      if (studentInfo[2] == $student.ID) {
        student.update(state => ({...state, 
          tool1: 2,
          tool2: studentInfo[4],
          tool3: studentInfo[5],
          tool4: studentInfo[6],
          tool5: studentInfo[7],
          tool6: studentInfo[8],
          tool7: studentInfo[9],
          tool8: studentInfo[10],
          tool9: studentInfo[11],
          tool10: studentInfo[12],
          tool11: studentInfo[13],
          tool12: studentInfo[14],
          tool13: studentInfo[15],
        }));
      }
    }
  }
</script> -->