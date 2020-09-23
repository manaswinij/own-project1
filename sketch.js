
var rewardGroup,obstaclesGroup
var bg, teddy, ground;
var bgImg;
var score=0;
var life=3;

function preload(){

   bgImg=loadImage("bg.jpg")
   
   
   }

function setup(){
   createCanvas(displayWidth-20,displayHeight-120);
   bg = createSprite(displayWidth/2,displayHeight/2-60,displayWidth*2,displayHeight-120)
   bg.addImage(bgImg)
   ground =createSprite(displayWidth/2,displayHeight-130,displayWidth,40)
   ground.visible=false; 
   teddy= createSprite(100,500,20,20); 
   ground.shapeColor="yellow" ;
   teddy.shapeColor="red";
   bg.velocityX=-4;
   
   rewardGroup=new Group()
   obstaclesGroup=new Group()

   
}



function draw(){
     background("black");
     if (keyDown(UP_ARROW)) {
        teddy.velocityY=-4
      } 
      teddy.velocityY=teddy.velocityY+0.5
      teddy.collide(ground);

      if(bg.x<0){

         bg.x=bg.width/2

      }

      if(rewardGroup.isTouching(teddy)){
         score=score+1
         for(var i =0; i<rewardGroup.length; i++){
            if(teddy.isTouching(rewardGroup.get(i))){
             rewardGroup.get(i).destroy()
           }
           }
      }

      if(obstaclesGroup.isTouching(teddy)){
         life=life-1
      }

     

      spawnObstacles();
      spawnReward();
   drawSprites();
   text("COINS : "+score,displayWidth-200,50)
   text("LIFE : "+life,100,50)
}

function spawnObstacles(){
         if (frameCount % Math.round(random(50,80)) === 0){
           var obstacle = createSprite(400,165,10,40);
           obstacle.velocityX = -6;
           obstaclesGroup.add(obstacle);
           obstacle.x=width
           
            // //generate random obstacles
            var rand = Math.round(random(50,displayHeight-200));
            obstacle.y=rand
           
           // obstacle.scale = 0.5;
            obstacle.lifetime = 300;
         }
}

function spawnReward(){
   if (frameCount % Math.round(random(50,80)) === 0){
     var reward= createSprite(400,165,10,40);
     reward.velocityX = -6;
     rewardGroup.add(reward);
     reward.x=width
     
      // //generate random obstacles
      var rand1 = Math.round(random(50,displayHeight-200));
      reward.y=rand1
      reward.shapeColor="green"
     
      //assign scale and lifetime to the obstacle           
     // obstacle.scale = 0.5;
    
      reward.lifetime = 300;
   }
}




  
