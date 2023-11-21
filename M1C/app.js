class App
{ 
    runApplication()
    {
        let boolean = true;
        let string = "Ik ben een mens";
        let number = 30;
       
        let appNaam = "DemoApp"
        let appVersie = "1.0"
        let appVersieDate = "30 Mei 2007"
        let appAuther = "Student MBO"
        let appCopyright = "Anass"
        let appDistribiteur = "Mij"
        let appDarkmode = false


        
        console.log("App naam:" + appNaam)
        console.log("App versie:" + appVersie)
        console.log("App versie date: " + appVersieDate)
        console.log("App autheur: "+ appAuther)
        console.log ("App copyright: " + appCopyright)
        console.log("App distrubiteur: " + appDistribiteur)
        console.log("darkmode: " + appDarkmode)
        

        
    
             
    }
}
let app = new App();
app.runApplication();
console.log(app.greeting);
console.log(app.boolean);
console.log(app.string);
console.log(app.number);