class App {
    runApplication() {
        console.log("Hello World!")
        const artiesten = ["Drake", "Frenna", "Boef","Lil baby","DaBaby"];
        artiesten.push("Drake", "Frenna", "Boef","DaBaby","Lil baby");
        let indexToRemove = artiesten.indexOf("bob dylan", "Prince");
        artiesten.splice(indexToRemove,1)
        console.log(artiesten)
      
        for (let i = 0; i < artiesten.length; i++) {
            const element = artiesten[i];
            console.log(i + ":" + artiesten[0 + i])
         
        }
 
 const nummers = [2, 5, 7]

 console.log(nummers)
 for (let i = 0; i < nummers.length; i++) {
    const element = nummers[i];
    // console.log(i);
    console.log(nummers[i]+1)
   }
        }
}



let app = new App();
app.runApplication();


