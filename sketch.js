//vishweshwar's first game (infinte runner)

var spikes,pixelBot,pixelBotimg,pixelGroundimg,pixelGround
function preload(){
pixelBotimg = loadImage("pixelBot.png")
pixelGroundimg = loadImage("pixelGround.png");
spikesImg = loadImage("spikes.png")
}

function setup(){
    createCanvas(400,400)
 pixelBot = createSprite(50,360,30,30)
 pixelBot.scale = 0.03
 pixelBot.addImage(pixelBotimg);
 pixelGround = createSprite(200,390,400,20)
 pixelGround.scale = 0.3
 pixelGround.x=pixelGround.x/2
 pixelGround.addImage(pixelGroundimg);
}

function draw() {
 background("white")
    drawSprites()

 //infinite ground and scrolling ground
 pixelGround.velocityX = -3
 if(pixelGround.x<200){
     pixelGround.x = pixelGround.width/2;
 }

 //pixelbot movement
 if(keyDown(RIGHT_ARROW)){
     pixelBot.x = pixelBot.x + 3;
 }
if(keyDown(LEFT_ARROW)){
     pixelBot.x = pixelBot.x -3;
 }

 if(keyDown(UP_ARROW)&&pixelBot.y>=355){
  pixelBot.velocityY= -13
}
//gravity
pixelBot.velocityY+= 0.8
pixelBot.collide(pixelGround)
spawnSpikes()
}

//spawn spikes 

function spawnSpikes(){
 if (frameCount % 60 === 0) {
 spikes = createsprite(400,360,30,30)
 spikes.addImage(spikesImg)
 spikes.velocityX = -3
 spikes.lifetime = 100 
 } 
}