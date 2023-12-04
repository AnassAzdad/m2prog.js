class App
{ 
    runApplication()
    {
    let canvas=document.getElementById("canvasId");
    let g= canvas.getContext("2d");

    
    console.log(canvas);
    g.beginPath()
    g.moveTo(20,30)
    g.lineTo(20,50)
    g.closePath()
    g.stroke();

    g.beginPath()
    g.moveTo(20,30)
    g.lineTo(60,40)
    g.closePath()
    g.stroke();

    g.beginPath()
    g.moveTo(20,50)
    g.lineTo(60,60)
    g.closePath()
    g.stroke();

    g.beginPath()
    g.moveTo(60,40)
    g.lineTo(60,60)
    g.closePath()
    g.stroke();

    g.beginPath()
    g.moveTo(60,40)
    g.lineTo(80,30)
    g.closePath()
    g.stroke();

    g.beginPath()
    g.moveTo(80,30)
    g.lineTo(80,50)
    g.closePath()
    g.stroke();

    g.beginPath()
    g.moveTo(60,60)
    g.lineTo(80,50)
    g.closePath()
    g.stroke();

    g.beginPath()
    g.moveTo(80,30)
    g.lineTo(70,20)
    g.closePath()
    g.stroke();

    g.beginPath()
    g.moveTo(70,20)
    g.lineTo(60,40)
    g.closePath()
    g.stroke();

    g.beginPath()
    g.moveTo(70,20)
    g.lineTo(30,10)
    g.closePath()

    g.beginPath()
    g.moveTo(30,10)
    g.lineTo(20,30)
    g.closePath()
    g.stroke();


    

    g.beginPath()
    g.fillStyle = "blue";
    g.moveTo(30,10)
    g.lineTo(20,30)
    g.lineTo(60,40)
    g.lineTo(70,20)
    
    g.closePath()
    
    
    g.stroke();
  
    g.fill()
   


   
 
             
    }
}
let app = new App();
app.runApplication();

