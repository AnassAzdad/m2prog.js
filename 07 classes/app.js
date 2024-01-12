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
    }
  showGreeting()
{
    console.log("Greetings!");
}
}
class Goodbye
{
    constructor()
    {
    }
   ShowBye()
   {
    console.log("Bye Bye");
   }
}

let bye = new Goodbye();
let greet = new Greet()
let app = new App();
app.runApplication();
greet.showGreeting();
bye.ShowBye();

greet.showGreeting();
bye.ShowBye();
greet.showGreeting();
bye.ShowBye();
greet.showGreeting();
bye.ShowBye();