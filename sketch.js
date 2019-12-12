const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground,football


function setup(){
    var canvas = createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var ground_options ={
    isStatic: true
}
ground=Bodies.rectangle(200,380,400,20,ground_options);
World.add(world,ground);
var football_options={
    restitution:1
    }
football=Bodies.circle(200,100,24,football_options);
World.add(world,football);
}

function draw(){
    
background(0);
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(football.position.x,football.position.y,24);










 

}