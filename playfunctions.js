function spawnTroops(){
  
    enemy = createSprite(random(8,windowWidth-8),-100,25,50)
    enemy.shapeColor = "red"
    enemy.velocityY=6
    enemy.lifetime=200
    enemy.depth=Math.round(random(1,16))
    enemies.push(enemy)

}
function enemyShoot(){
  for(i=0;i<enemies.length;i++){
    if(enemies[i].y==800){
    }
    else{
    if(enemies[i].depth==1){
      enemybullet = createSprite(enemies[i].x,enemies[i].y,10,10);
      enemybullet.shapeColor = "black";
      enemybullet.lifetime = 25
      enemybullet.velocityX=-5
      enemybullet.velocityY= enemybulletspeed
      enemybullets.push(enemybullet)
        enemybullet = createSprite(enemies[i].x+10,enemies[i].y,10,10);
      enemybullet.shapeColor = "black";
      enemybullet.lifetime = 25
      enemybullet.velocityX= 0
      enemybullet.velocityY= enemybulletspeed
      enemybullets.push(enemybullet)
      enemybullet = createSprite(enemies[i].x+-10,enemies[i].y,10,10);
      enemybullet.shapeColor = "black";
      enemybullet.lifetime = 25
      enemybullet.velocityX=0
      enemybullet.velocityY= enemybulletspeed
      enemybullets.push(enemybullet)
      enemybullet = createSprite(enemies[i].x,enemies[i].y,10,10);
      enemybullet.shapeColor = "black";
      enemybullet.lifetime = 25
      enemybullet.velocityX=5
      enemybullet.velocityY= enemybulletspeed
      enemybullets.push(enemybullet)
    } 
  }

  if(frameCount%60==0){
  for(i=0;i<enemies.length;i++){
    if(enemies[i].depth==1){
      
    }
    if(enemies[i].depth==2||enemies[i].depth==3){
      enemybullet = createSprite(enemies[i].x-10,enemies[i].y,10,10);
    enemybullet.shapeColor = "black";
    enemybullet.lifetime = 25
    enemybullet.velocityX=0
    enemybullet.velocityY= enemybulletspeed
    enemybullets.push(enemybullet)
    enemybullet = createSprite(enemies[i].x+10,enemies[i].y,10,10);
    enemybullet.shapeColor = "black";
    enemybullet.lifetime = 25
    enemybullet.velocityX=0
    enemybullet.velocityY= enemybulletspeed
    enemybullets.push(enemybullet)
    }
    if(enemies[i].depth==4||enemies[i].depth==5){
      enemybullet = createSprite(enemies[i].x,enemies[i].y,10,10);
    enemybullet.shapeColor = "black";
    enemybullet.lifetime = 25
    enemybullet.velocityX=-10
    enemybullet.velocityY= enemybulletspeed
    enemybullets.push(enemybullet)
      enemybullet = createSprite(enemies[i].x,enemies[i].y,10,10);
    enemybullet.shapeColor = "black";
    enemybullet.lifetime = 25
    enemybullet.velocityX=-5
    enemybullet.velocityY= enemybulletspeed
    enemybullets.push(enemybullet)
    enemybullet = createSprite(enemies[i].x,enemies[i].y,10,10);
    enemybullet.shapeColor = "black";
    enemybullet.lifetime = 25
    enemybullet.velocityX=0
    enemybullet.velocityY= enemybulletspeed
    enemybullets.push(enemybullet)
    enemybullet = createSprite(enemies[i].x,enemies[i].y,10,10);
    enemybullet.shapeColor = "black";
    enemybullet.lifetime = 25
    enemybullet.velocityX=5
    enemybullet.velocityY= enemybulletspeed
    enemybullets.push(enemybullet)
    enemybullet = createSprite(enemies[i].x,enemies[i].y,10,10);
    enemybullet.shapeColor = "black";
    enemybullet.lifetime = 25
    enemybullet.velocityX=10
    enemybullet.velocityY= enemybulletspeed
    enemybullets.push(enemybullet)

    }
    else{
    // enemybullet = createSprite(enemies[i].x,enemies[i].y,10,10);
    // enemybullet.shapeColor = "black";
    // enemybullet.lifetime = 25
    // enemybullet.velocityX=-1
    // enemybullet.velocityY= enemybulletspeed
    // enemybullets.push(enemybullet)

    enemybullet = createSprite(enemies[i].x,enemies[i].y,10,10);
    enemybullet.shapeColor = "black";
    enemybullet.lifetime = 25
    enemybullet.velocityX=0
    enemybullet.velocityY= enemybulletspeed
    enemybullets.push(enemybullet)

    // enemybullet = createSprite(enemies[i].x,enemies[i].y,10,10);
    // enemybullet.shapeColor = "black";
    // enemybullet.lifetime = 25
    // enemybullet.velocityX=1
    // enemybullet.velocityY= enemybulletspeed
    // enemybullets.push(enemybullet)
    }
  }
  }
}
}
function shoot(){
  if(choice=="Rifle"){
  bullet = createSprite(commander.x,commander.y,10,10)
  bullet.shapeColor = "blue"
  bullet.lifetime = 25
  bullet.velocityY=bulletspeed
  bullets.push(bullet)
  }

  if(choice=="Two-barrel"){
    bullet = createSprite(commander.x+5,commander.y,10,10)
  bullet.shapeColor = "blue"
  bullet.lifetime = 25
  bullet.velocityY=bulletspeed
  bullets.push(bullet)
  bullet = createSprite(commander.x-5,commander.y,10,10)
  bullet.shapeColor = "blue"
  bullet.lifetime = 25
  bullet.velocityY=bulletspeed
  bullets.push(bullet)
  }
  if(choice=="Shotgun"){
    bullet = createSprite(commander.x,commander.y,10,10)
  bullet.shapeColor = "blue"
  bullet.lifetime = 25
  bullet.velocityY=bulletspeed
  bullet.velocityX=10
  bullets.push(bullet)
  bullet = createSprite(commander.x,commander.y,10,10)
  bullet.shapeColor = "blue"
  bullet.lifetime = 25
  bullet.velocityY=bulletspeed
  bullet.velocityX=5
  bullets.push(bullet)
  bullet = createSprite(commander.x,commander.y,10,10)
  bullet.shapeColor = "blue"
  bullet.lifetime = 25
  bullet.velocityY=bulletspeed
  bullet.velocityX=0
  bullets.push(bullet)
  bullet = createSprite(commander.x,commander.y,10,10)
  bullet.shapeColor = "blue"
  bullet.lifetime = 25
  bullet.velocityY=bulletspeed
  bullet.velocityX=-5
  bullets.push(bullet)
  bullet = createSprite(commander.x,commander.y,10,10)
  bullet.shapeColor = "blue"
  bullet.lifetime = 25
  bullet.velocityY=bulletspeed
  bullet.velocityX=-10
  bullets.push(bullet)
  }
 
}
function holdShoot(){
  if(choice=="Minigun"){
    bullet = createSprite(commander.x,commander.y,10,10)
    bullet.shapeColor = "blue"
    bullet.lifetime = 25
    bullet.velocityY=bulletspeed
    bullet.velocityX=5
    bullets.push(bullet)
    bullet = createSprite(commander.x-10,commander.y,10,10)
    bullet.shapeColor = "blue"
    bullet.lifetime = 25
    bullet.velocityY=bulletspeed
    bullet.velocityX=0
    bullets.push(bullet)
    bullet = createSprite(commander.x+10,commander.y,10,10)
    bullet.shapeColor = "blue"
    bullet.lifetime = 25
    bullet.velocityY=bulletspeed
    bullet.velocityX=0
    bullets.push(bullet)
    bullet = createSprite(commander.x,commander.y,10,10)
    bullet.shapeColor = "blue"
    bullet.lifetime = 25
    bullet.velocityY=bulletspeed
    bullet.velocityX=-5
    bullets.push(bullet)
    }
}
function newTroop(){
  troop = createSprite(troopIcon.x,troopIcon.y,25,50)
  troop.shapeColor = "green"
  troops.push(troop)
}
function pause(){
    if(keyDown("p")&&gamestate=="LEVEL1"){
        gamestate="PAUSE"
    }
    if(keyDown("space")&&gamestate=="PAUSE"){
        gamestate="LEVEL1"
        for(i=0;i<enemies.length;i++){
        enemies[i].lifetime=200
        enemies[i].velocityY=4
        }
        for(i=0;i<enemybullets.length;i++){
        enemybullets[i].lifetime=25
        enemybullets[i].velocityY=enemybulletspeed
        console.log(enemybulletspeed)
        }
        for(i=0;i<bullets.length;i++){
        bullets[i].lifetime=25
        bullets[i].velocityY=bulletspeed
          
        }
        if(troopState==1){
        troopIcon.velocityY=4
        }
    }
}
