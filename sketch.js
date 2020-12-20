var  dog, happyDog, database, foodS, foodStock;

function preload()
{
dog=loadImage("image/dogImg.png");
happyDog=loadImage("image/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
 dog = createSprite(250,250)
 dog=addImage("image/dogImg.png");
 
 
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){

}

drawSprites();
}



