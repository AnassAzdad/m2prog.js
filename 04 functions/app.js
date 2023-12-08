





function heeftEenResultaat() {
    let resultaat = 1;
    return resultaat;
}
let hetResultaat = heeftEenResultaat()
console.log(hetResultaat);
console.log(heeftEenResultaat());


function ax2bcWiskunde(x, a, b, c) {
    let y = (a * (x * x)) + (b * x) + c;
    return y;
}

let y1 = ax2bcWiskunde(9, 3, 4, 89);
console.log(y1);

let y2 = ax2bcWiskunde(3, 6, 5, 45);
console.log(y2);

let y3 = ax2bcWiskunde(7, 1, 2, 13);
console.log(y3);

function BurgerKing() {
    let u = 9;
    let h = 8;
    let l = 15
    let LogY = Math.log(1) + h + Math.pow(u, 2);
    return LogY;
}


let resultaat = BurgerKing();
console.log(resultaat)




function argumentsAreHandy(shoutout) {
    console.log("do you want to give a shoutout?");
    console.log("Super shout out!");
    console.log("Letsago!");
    console.log("Super mario number 1");
}
argumentsAreHandy("Letsago!")
argumentsAreHandy("Super mario number 1");







function superMooieGlobalFunction() {
    console.log("ik ben globaal")
    console.log("dus je mag mij overal aanroepen")
}
superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

class App {
    runApplication() {
        console.log("Hello World")
    
        this.classFunction();
    }
classFunction()
{
    console.log("je voer een class function uit!")
}

MarioFunction()
{
console.log("MARIO NUMBER 1!")
}
BowserFunction()
{
    return "BWAHAHA"
}
GetalFunction(Getal1,Getal2){
   console.log(Getal1+Getal2)

}

}

let app = new App();
app.runApplication();
app.MarioFunction();
console.log(app.BowserFunction());
app.GetalFunction(4, 3);