
// name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {

 var canvas= createCanvas(400,400);

 engine= Engine.create();
 world=engine.world;

 var ball_opts={
   restitution:2.0
 }
 ball=Bodies.circle(200,100,20,ball_opts);
 World.add(world,ball);

 var ground_options = {
   isStatic:true
 }
 ground=Bodies.rectangle(200,390,400,20,ground_options);
 World.add(world,ground);
console.log(ball);
console.log(ball.position.x);
console.log(ball.position.y);
}

function draw() {

  Engine.update(engine)
  background(0);  

  fill("orange")
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
  
  fill("green")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400,20);

}