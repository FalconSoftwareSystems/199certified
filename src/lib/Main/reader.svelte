    import { student } from "../stores";

    // fetch('https://script.google.com/macros/s/AKfycbyJMFNY2Ejp9TQ8xIutrB8UqnE09lSbZAu12PKpi4Dwtgi7HyIN4BzSC0weDlB59O1LzQ/exec')
    // //getting actual json
    // .then(res => res.json())
    // //res is a callback arrow function to then, takes res.json to parse.
    // .then(data => {
    //   for (const person of data.content.slice(3)){
    //     let stringID = person[2]
    //     if(144682 == person[2]){
    //       localStorage.setItem(person[2].toString(), JSON.stringify(person))
    //     }
    //   }
    //   //takes parsed json as parameter (data)
    // });

    async function logJSONData() {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyJMFNY2Ejp9TQ8xIutrB8UqnE09lSbZAu12PKpi4Dwtgi7HyIN4BzSC0weDlB59O1LzQ/exec");
      const jsonData = await response.json();
      for (const student of jsonData.content) {
        if (student[2] == "144682") {
          console.log(student)
        }
      }
    }

<button type="button" id="test_button" on:click={logJSONData}>TEST</button><br>

<!--ok guys there's abit of a problem
so basically to access that link u gottta bein mcps
and i cant put it on the github age
cause there isnt any way to google scripts to chck if we are in mcps or not
2 options, find something else lol
or
if kingman can access a spreadsheet that isnt owned by mcps, then we can make a new spreadsheeton fss gmail account
just call me ill explai--></br>