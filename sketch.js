var snake;
var scl = 20;
var food;
var backgroundImg;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  
  pickLocation();
  snake = new Snake();

}

function draw() {
  background("black");
  

  if(snake.eat(food)){
    pickLocation();
  }
  if(snake.death()){
    noLoop();
    background("red");
  }
  
  snake.update();
  snake.show();

  fill("yellow");
  rect(food.x , food.y , scl,scl);
  fill("GREEN");
  text("SCORE:"+score,100,15);
}



function pickLocation(){
   var cols = floor(width/scl);
   var rows = floor(height/scl);
   food = createVector(floor(random(cols)), floor(random(rows)));
   food.mult(scl);
}

function keyPressed(){
  if(keyCode === UP_ARROW ){
    snake.dir(0,-1);
  }  
  if(keyCode === DOWN_ARROW ){
    snake.dir(0,1);
  }  
  if(keyCode === RIGHT_ARROW){
    snake.dir(1,0);
  }  
  if(keyCode === LEFT_ARROW ){
    snake.dir(-1,0);
  }  
}