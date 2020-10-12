var bullet, wall;
var thickness, speed, weight;

function setup() {
  createCanvas(1200,400);

  weight = random(30, 52);
  speed = random(223,321);
  thickness = random(22,83);

  bullet = createSprite(100, 200, 50, 20);
  wall = createSprite(1000,200,thickness,height/2)

  bullet.shapeColor = "white";

  bullet.velocityX = speed;

}

function draw() {
  background("black");  
  hasCollided();
  drawSprites();
}

function hasCollided(){


  
  if(wall.position.x - bullet.position.x < bullet.width/2 + wall.width/2){
    bullet.velocityX = 0;

    var damage= (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = "red";
      textAlign(CENTER);
      textSize(30);
      fill("white")
      text("WALL IS NOT EFFECTIVE AGAINST BULLET", (width/2) - 300 , height/2)
    }

    if(damage < 10){
      wall.shapeColor = "green";
      textAlign(CENTER);
      textSize(30);
      fill("white")
      text("WALL IS EFFECTIVE AGAINST BULLET", (width/2) - 300, height/2)
    }
  }
}