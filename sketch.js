
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5, mango6,mango7,mango8,mango9;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,200,30);
	mango2=new mango(1070,120,30);
	mango3=new mango(1130,80,30);
	mango4=new mango(1150,150,30);
	mango5=new mango(1210,230,30);
	mango6=new mango(1000,170,30);
    mango7=new mango(900,200,30);
	mango8=new mango(1070,50,30);
  mango9=new mango(1000,60,30);
  
  stone1 =new stone(237,405,30)
  slingshot = new SlingShot(stone1.body,{x:237, y:425});
  
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background("lightblue");
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  textSize(25)
  fill("black")
  text("PRESS 'SPACE' FOR A SECOND CHANCE",50,50);
  slingshot.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone1.display();

 

detectcollision(stone1,mango1);
detectcollision(stone1,mango2);
detectcollision(stone1,mango3);
detectcollision(stone1,mango4);
detectcollision(stone1,mango5);
detectcollision(stone1,mango6);
detectcollision(stone1,mango7);
detectcollision(stone1,mango8);
detectcollision(stone1,mango9);


  groundObject.display();
}




function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
 
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(stone1.body);
  }
  }
  function isTouching(object1,object2){
    if(object1.x-object2.x<object2.width/2+object1.width/2
      && object2.x-object1.x < object2.width/2+object1.width/2
      && object1.y-object2.y<object2.height/2+ object1.height/2
      && object2.y-object1.y< object2.height/2+object1.height/2) {
       object2.isStatic=false
      // object2.shapeColor = "red";
   }
   else{
      
       object2.isStatic=true
       //object2.shapeColor = "green";
   }
   
   
   }
  function detectcollision(lstone,lmango){
   var mangoBodyPosition = lmango.body.position
   var stoneBodyPosition = lstone.body.position

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<lmango.r+lstone.r){
     Matter.Body.setStatic(lmango.body,false)
   }
  }