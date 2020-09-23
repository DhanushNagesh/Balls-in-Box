const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;

var log1,log2,log3,log4


var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,400,20)
    box1 = new Box(700,320,20,20);
    box2 = new Box(620,320,20,20);


    log1 = new Log(410,250,300,PI/1)

    box3 = new Box(700,200,20,20);
    box4 = new Box(520,200,20,20); 


    log2 = new Log(810,250,300,PI/1)

    box5 = new Box(510,190,20,20)

    log3 = new Log(850,170,150,PI/1.5)
    log4 = new Log(770,170,150,PI/3.5)

    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
   
   
}