const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  var option = {isStatic:true}
  ground = Bodies.rectangle(400,380,800,20,option);
  World.add(world,ground);

  var ballOption = {restitution:1}
  ball = Bodies.circle(200,200,20,ballOption);
  World.add(world,ball);
}

function draw() {
  background(255,255,255); 

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}