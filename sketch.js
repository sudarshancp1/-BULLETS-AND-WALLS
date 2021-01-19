/*var car,wall;
var speed ,weight;
function setup() {
  createCanvas(1000,400);
 
speed=random(55,90)
weight=random(400,1500)
car=createSprite(50,200,50,50);
wall=createSprite(900,200,60,300);
car.velocityX = speed;
deformation=(0.5*weight*speed*speed)/22500;

}

function draw() {
  background(255,255,255);  
 if (wall.x-car.x <= car.width/2+wall.width/2){
  car.velocityX=0;
  //var deformation=0.5 * weight * speed * speed/22500;
 var  deformation=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  if(deformation>180)
   {
     car.shapeColor=color(255,0,0);r̥
   }
   if(deformation<180 && deformation>100)
   {
     car.shapeColor=color(230,230,0);
   }
   if(deformation<100)
 {
   car.shapeColor=color(0,225,0);
     }
 }

  drawSprites();
}

*/
var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)


  thickness=random(22,83)

    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);
 
    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color(230,230,230);
}

function draw() {
  background(0);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
  }
  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
