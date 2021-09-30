
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var title
var usernameInput;
var tagLine;
var rectangle;
var shake;
var question;
var reason;
var creator;

function preload(){
  ballimage = loadImage("ball.jpg")
  resultimage = loadImage("result.png")
  bg = loadImage("magic.jpg")
}
function setup()
{
createCanvas(1901,965.1)

title = createElement("h1")
title.html("MAGIC 8 BALL")
title.position(800,10)

tagLine = createElement("h2")
tagLine.html("ASK ME ANYTHING")
tagLine.position(798,500)

engine = Engine.create()
world = engine.world;

  // createCanvas(displayWidth-4.01, displayHeight-121);
 usernameInput = createInput("").attribute("placeholder","Enter The Question") 
usernameInput.position(displayWidth/2-235, displayHeight/2+50 )
usernameInput.class("placeholder")

ball = createSprite(920,300)
ball.addImage("a",ballimage)

creator = createElement("h3")
creator.html("Creator : Pranav")
creator.position(690,725)
reason = createElement("h3")
reason.html("Reason : End of course project")
reason.position(905,725)

rectangle = Bodies.rectangle(920,300,400,400,{restitution:0.3,isStatic:false});

//ground = Bodies.rectangle(920,500,400,20,{isStatic:true})

shake = createButton("Shake")
shake.position(870, 655)
shake.class("button")
}

function draw() 
{
  background("white");


  //fill("cyan")
  shake.mousePressed(()=>{
    question=usernameInput.value()
    ball.addImage("b",resultimage)
    ball.changeImage("b")
   /* display1 = createElement('h2')
    display1.position(400,150)
    display1.style('color',"black")
    display1.html("Question:"+question)*/
    display = createElement('h1')
    display.position(818,550)
    display.style('color',"black")
    display.class("display")

    if(question==="Do you work"){
      display.html("Signs Point to Yes")
    }
    else if(question==="How accurate are you"){
      display.html("As accurate as you think")
    
    }
    else if(question==="Is magic real "){
        display.html("Affirmative")
    }
    else if(question==="what can i ask you"){
      display.html("Whatever you desire")
    }
    else if(question==="will you tell me the right answer"){
      display.html("possibly")
    }
    else if( question==="are you always correct"){
      display.html("On belief.. yes")

    } else if(question==="is it going to be a good day"){
      display.html("If yes means horrible, then yes")
    }
    else if(question==="is war going to break out"){
      display.html("Possibly")
    }
    else if(question==="is someone angry at me" ){
      display.html("Surer than Petroleum ads")
    }
    else{
    var rand = Math.round(random(1,20))
    switch(rand){
      case 1: display.html("Yes")
      break;
      case 2: display.html("I don't recommend")
      break;
      case 3:display.html("Outlook good")
      break;
      case 4:display.html("Outlook Bad")
      break;
      case 5: display.html("Affirmative")
      break;
      case 6: display.html("Negative")
      break;
      case 7: display.html("I recommend")
      break;
      case 8: display.html("Signs Point to No")
      break;
      case 9: display.html("Signs Point to Yes")
      break;
      case 10: display.html("Advisable")
      break;
      case 11: display.html("Unadvisable")
      break;
      case 12: display.html("Good Decision")
      break;
      case 13: display.html("Bad Decision")
      break;
      case 14: display.html("Do it")
      break;
      case 15: display.html("Don't Do it")
      break;
      case 16: display.html("Approved")
      break;
      case 17: display.html("Denied")
      break;
      case 18: display.html("Not now")
      break;
      case 19: display.html("Right Now")
      break;
      case 20: display.html("No")
      break;
    }
  }
    
    shake.hide()
    usernameInput.hide()
    tagLine.hide()
    button1=createButton("Reload")
    button1.position(870, 655)
    button1.class("button")
    button1.mousePressed(()=>{
      location.reload()
    })
    })
    drawSprites()
}

