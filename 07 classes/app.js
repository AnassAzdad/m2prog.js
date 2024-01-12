class App
{ 
    runApplication()
    {
        console.log("Hello world!")
    }
}

class Greet 
{
    constructor()
    {
        console.log("Greetings!");
    }
}
class Goodbye
{
    constructor()
    {
        console.log("Bye Bye");
    }
}

let bye = new Goodbye();
let greet = new Greet()
let app = new App();
app.runApplication();
