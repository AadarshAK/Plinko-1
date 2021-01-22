const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Bodies=Matter.Bodies;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function preload(){

}

function setup() {
  createCanvas(1280,800);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
// Level 1
 /* b1=new Ball(100,100,20);
  b2=new Ball(200,100,20);
  b3=new Ball(300,100,20);
  b4=new Ball(400,100,20); 
  b5=new Ball(500,100,20);
  b6=new Ball(600,100,20);
  b7=new Ball(700,100,20);
  b8=new Ball(800,100,20);

  b9=new Ball(50,200,20);
  b10=new Ball(150,200,20);
  b11=new Ball(250,200,20);
  b12=new Ball(350,200,20);
  b13=new Ball(450,200,20);
  b14=new Ball(550,200,20);
  b15=new Ball(650,200,20);
  b16=new Ball(750,200,20);
  b17=new Ball(850,200,20);

  b18=new Ball(100,300,20);
  b19=new Ball(200,300,20);
  b20=new Ball(300,300,20);
  b21=new Ball(400,300,20); 
  b22=new Ball(500,300,20);
  b23=new Ball(600,300,20);
  b24=new Ball(700,300,20);
  b25=new Ball(800,300,20);*/
}

function draw() {
  background(255,255,255);
  
  Engine.update(engine);

  //drawSprites();

 /* b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();

  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();

  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();*/

  for (var k=0; k<=width; k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
}