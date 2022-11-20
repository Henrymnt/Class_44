var commander
var troopIcon, troopState, troop, redHP, greenHP
var troops = []
var redHPs =[]
var greenHPs=[]
var leftwall,rightwall,topwall,bottomwall
var enemy
var enemies = []
var bullet,enemybullet
var enemybullets = []
var bullets = []
var healthBar
var redHealthBar

var bulletspeed=-20
var enemybulletspeed=20

var med
var meds = []
var coin
var coins = []
var money=0
var moneySymbol1
var moneySymbol2
var moneySymbol3
var moneySymbol4
var moneySymbol5

var random

var startbutton
var shopbutton
var optionsbutton

var level1
var level2

var rifle
var rifleBuy
var twobarrel
var twobarrelBuy
var twobarrelState=0
var shotgun
var shotgunBuy
var shotgunState=0
var minigun
var minigunBuy
var minigunState=0
var levelstart=0
var choice = "Rifle"

var controller="MOUSE"

var gamestate = "STARTPAGE"

var timeafterclick=0

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);  

  startbutton = createSprite(windowWidth/2,3*(windowHeight/8),800,(windowHeight/8))
  startbutton.shapeColor="black"
  shopbutton = createSprite(windowWidth/2,5*(windowHeight/8),800,(windowHeight/8))
  shopbutton.shapeColor="black"
  optionsbutton = createSprite(windowWidth/2,7*(windowHeight/8),800,(windowHeight/8))
  optionsbutton.shapeColor="black"

  level1 = createSprite(150,150,200,200)
  level1.shapeColor="darkgreen"

  level2 = createSprite(400,150,200,200)
  level2.shapeColor="darkgreen"

  rifle= createSprite(100,200,180,120)
  rifleBuy= createSprite(100,230,150,40)
  rifleBuy.shapeColor="red"
  twobarrel= createSprite(300,200,180,120)
  twobarrelBuy= createSprite(300,230,150,40)
  twobarrelBuy.shapeColor="red"
  shotgun= createSprite(500,200,180,120)
  shotgunBuy= createSprite(500,230,150,40)
  shotgunBuy.shapeColor="red"
  minigun= createSprite(700,200,180,120)
  minigunBuy= createSprite(700,230,150,40)
  minigunBuy.shapeColor="red"

  moneySymbol1=createSprite(50,50,25,25)
  moneySymbol1.shapeColor="yellow"
  moneySymbol2=createSprite(60,190,15,15)
  moneySymbol2.shapeColor="yellow"
  moneySymbol3=createSprite(260,190,15,15)
  moneySymbol3.shapeColor="yellow"
  moneySymbol4=createSprite(460,190,15,15)
  moneySymbol4.shapeColor="yellow"
  moneySymbol5=createSprite(660,190,15,15)
  moneySymbol5.shapeColor="yellow"

  commander = createSprite(400,300,25,50)
  commander.shapeColor = "darkgreen"
  leftwall= createSprite(0,(windowHeight-5)/2,5,windowHeight-5)
  rightwall= createSprite(windowWidth-5,(windowHeight-5)/2,5,windowHeight-5)
  topwall= createSprite((windowWidth-5)/2,0,windowWidth-5,5)
  bottomwall= createSprite((windowWidth-5)/2,windowHeight-5,windowWidth-5,5)
  healthBar = createSprite(125,25,200,25)
  healthBar.shapeColor = "green"
  redHealthBar = createSprite(125,25,200,25)
  redHealthBar.shapeColor = "red"
  healthBar.depth=-0.5
  redHealthBar.depth=-1

  gotostartpage();

}

function draw() {
  background("tan");

  timeafterclick--

    if(gamestate=="STARTPAGE"){
    startbutton.visible=true
    shopbutton.visible=true
    optionsbutton.visible=true
    }
    else{
      startbutton.visible=false
    shopbutton.visible=false
    optionsbutton.visible=false
    }
    

    if(gamestate=="LEVELS"){
    level1.visible=true
    level2.visible=true
    }
    else{
      level1.visible=false
      level2.visible=false
    }

    if(gamestate=="SHOP"){
    moneySymbol1.visible=true
    moneySymbol2.visible=true
    moneySymbol3.visible=true
    moneySymbol4.visible=true
    moneySymbol5.visible=true
    rifle.visible = true
    rifleBuy.visible = true
    twobarrel.visible = true
    twobarrelBuy.visible = true
    shotgun.visible = true
    shotgunBuy.visible = true
    minigun.visible = true
    minigunBuy.visible = true
    }
    else{
      moneySymbol1.visible=false
      moneySymbol2.visible=false
      moneySymbol3.visible=false
      moneySymbol4.visible=false
      moneySymbol5.visible=false
      rifle.visible = false
      rifleBuy.visible = false
      twobarrel.visible = false
      twobarrelBuy.visible = false
      shotgun.visible = false
      shotgunBuy.visible = false
      minigun.visible = false
      minigunBuy.visible = false
    }


    lv1();
    lv2();
      
      





  drawSprites();

  //startpage
  if(keyDown("z")){
    gotostartpage();
  }
  startpage()
  //startpage buttons
  if(mousePressedOver(startbutton)&&gamestate=="STARTPAGE"){
    timeafterclick=5
    start();
  }
  if(mousePressedOver(shopbutton)&&gamestate=="STARTPAGE"){
    shop();
    timeafterclick=5
  }
  if(mousePressedOver(optionsbutton)&&gamestate=="STARTPAGE"){
    timeafterclick=5
    options();
  }
  //levels
  if(gamestate=="LEVELS"){


    fill("white")
    textSize(25)
    textAlign(CENTER)
    text("Level 1",150,150)
    text("Level 2",400,150)

    if(mousePressedOver(level1)&&timeafterclick<=0){
      timeafterclick=5
      gamestate="LEVEL1"
    healthBar.visible=true
    healthBar.width=200
    healthBar.x=125
    redHealthBar.visible=true
    commander.visible=true
      levelstart=frameCount

    }
    if(mousePressedOver(level2)&&timeafterclick<=0){
      timeafterclick=5
      gamestate="LEVEL2"
    healthBar.visible=true
    healthBar.width=200
    healthBar.x=125
    redHealthBar.visible=true
    commander.visible=true
      levelstart=frameCount

    }










  }

//shop
  if(gamestate=="SHOP"){

    fill("white")
    textSize(25)
    text(money,moneySymbol1.x+25,60)
    text("100",moneySymbol2.x+25,200)
    text("200",moneySymbol3.x+25,200)
    text("500",moneySymbol4.x+25,200)
    text("1500",moneySymbol5.x+25,200)
    textAlign(CENTER)

    text("Rifle",100,170)
    if(choice=="Rifle"){
    text("Selected",100,235)
    }
    else{
    text("Select",100,235)  
    }
    if(mousePressedOver(rifleBuy)){
      choice="Rifle"
      if(twobarrelState==0){}
          else{
          twobarrelState=2
          }
      if(shotgunState==0){}
          else{
          shotgunState=2
          }
      if(minigunState==0){}
          else{
          minigunState=2
          }
    }

    text("Two-Barrel",300,170)
    if(twobarrelState==0){
    text("Buy",300,235)
    }
    else{
    if(twobarrelState==1){
      text("Selected",300,235)   
    }
    if(twobarrelState==2){
      text("Select",300,235)   
    }
  }
    if(mousePressedOver(twobarrelBuy)){
      if(twobarrelState==0){
        if(money>=200){
          money-=200
          choice="Two-barrel"
          twobarrelState=1
          if(shotgunState==0){}
          else{
          shotgunState=2
          }
          if(minigunState==0){}
          else{
          minigunState=2
          }
        }
      }
      else{
      choice="Two-barrel"
      twobarrelState=1
      if(shotgunState==0){}
      else{
      shotgunState=2
      }
      if(minigunState==0){}
      else{
      minigunState=2
      }
    }
    }

    text("Shotgun",500,170)
    if(shotgunState==0){
    text("Buy",500,235)
    }
    else{
    if(shotgunState==1){
      text("Selected",500,235)   
    }
    if(shotgunState==2){
      text("Select",500,235)   
    }
  }
    if(mousePressedOver(shotgunBuy)){
      if(shotgunState==0){
        if(money>=500){
          money-=500
          choice="Shotgun"
          shotgunState=1
          if(twobarrelState==0){}
          else{
          twobarrelState=2
          }
          if(minigunState==0){}
          else{
          minigunState=2
          }
        }
      }
      else{
      choice="Shotgun"
      shotgunState=1
      if(twobarrelState==0){}
      else{
      twobarrelState=2
      }
      if(minigunState==0){}
      else{
      minigunState=2
      }
    }
  }

    text("Minigun",700,170)
    if(minigunState==0){
    text("Buy",700,235)
    }
    else{
    if(minigunState==1){
      text("Selected",700,235)   
    }
    if(minigunState==2){
      text("Select",700,235)   
    }
  }

    if(mousePressedOver(minigunBuy)){
      if(minigunState==0){
        if(money>=1500){
          money-=1500
          choice="Minigun"
          minigunState=1
          if(twobarrelState==0){}
          else{
          twobarrelState=2
          }
          if(shotgunState==0){}
          else{
          shotgunState=2
          }
        }
      }
      else{
      choice="Minigun"
      minigunState=1
      if(twobarrelState==0){}
      else{
      twobarrelState=2
      }
      if(shotgunState==0){}
      else{
      shotgunState=2
      }
    }
  }

  }
  //options
  if(gamestate=="OPTIONS"){
    textSize(20)
    textAlign(CENTER)
    fill("black")
      text("Use WASD/Arrow Keys or the mouse to move.",windowWidth/2,50)
      text("Use 'm' to switch to mouse and 'n' to switch to WASD/Arrow Keys",windowWidth/2,100)
      text("Use 'p' to pause and use 'q' or the space bar to shoot",windowWidth/2,150)
      text("Press 'z' to return to the home screen",windowWidth/2,200)
      text("Good Luck!",windowWidth/2,250)
      text("1.0.0",windowWidth/2,300)
  } 


  
if(gamestate=="LEVEL1"||gamestate=="LEVEL2"){
  if(keyDown("space")){
    if(choice=="Minigun"){
    holdShoot();
    }
  }
  if(keyDown("q")){
    console.log("all")
    if(choice=="Minigun"){
      console.log("right")
    holdShoot();
    }
  }
}

}
function keyReleased(){
  if(gamestate=="LEVEL1"||gamestate=="LEVEL2"){
  if(keyDown("space")){
    shoot();
  }
  if(keyDown("q")){
    shoot();
  }
}
}

//start
function start(){
  gamestate="LEVELS"
  healthBar.visible=false
  redHealthBar.visible=false
  commander.visible=false
  for(i=0;i<enemies.length;i++){
    enemies[i].destroy();
    enemies[i].y=800
  }
  for(i=0;i<troops.length;i++){
    troops[i].destroy();
    troops[i].y=800
  }
  for(i=0;i<coins.length;i++){
    coins[i].destroy();
    coins[i].y=800
  }
  for(i=0;i<meds.length;i++){
    meds[i].destroy();
    meds[i].y=800
  }




 }
 //shop
 function shop(){
  gamestate="SHOP"
  healthBar.visible=false
  redHealthBar.visible=false
  commander.visible=false
  for(i=0;i<enemies.length;i++){
    enemies[i].destroy();
    enemies[i].y=800
  }
  for(i=0;i<troops.length;i++){
    troops[i].destroy();
    troops[i].y=800
  }
  for(i=0;i<coins.length;i++){
    coins[i].destroy();
    coins[i].y=800
  }
  for(i=0;i<meds.length;i++){
    meds[i].destroy();
    meds[i].y=800
  }
 }
 //options
 function options(){
  gamestate="OPTIONS"
  healthBar.visible=false
  redHealthBar.visible=false
  commander.visible=false
  for(i=0;i<enemies.length;i++){
    enemies[i].destroy();
    enemies[i].y=800
  }
  for(i=0;i<troops.length;i++){
    troops[i].destroy();
    troops[i].y=800
  }
  for(i=0;i<coins.length;i++){
    coins[i].destroy();
    coins[i].y=800
  }
  for(i=0;i<meds.length;i++){
    meds[i].destroy();
    meds[i].y=800
  }
 }
 function lv1(){
  if(gamestate=="LEVEL1"){

    if(healthBar.width>200){
      healthBar.width=200
      healthBar.x=125
    }
    //move
  
    if(controller=="WASD"){
    if(keyDown("up")||keyDown("w")){
      commander.y-=8
    }
    if(keyDown("down")||keyDown("s")){
      commander.y+=8
    }
    if(keyDown("left")||keyDown("a")){
      commander.x-=12
    }
    if(keyDown("right")||keyDown("d")){
      commander.x+=12
    }
    }
    if(controller=="MOUSE"){
    commander.x=World.mouseX
    commander.y=World.mouseY
    }
    if(commander.isTouching(topwall)){
      commander.y+=8
    }
    if(commander.isTouching(bottomwall)){
      commander.y-=8
    }
    if(commander.isTouching(leftwall)){
      commander.x+=12
    }
    if(commander.isTouching(rightwall)){
      commander.x-=12
    }
    //troops
  
    // bullet = createSprite(troop.x,troop.y,10,10)
    // bullet.shapeColor = "blue"
    // bullet.lifetime = 25
    // bullet.velocityY=-enemybulletspeed
    // bullets.push(bullet)
  
    //spawn
    if(frameCount%30==0){

    spawnTroops();
  
    
  }
  if(frameCount%480==0){
    troopIcon = createSprite(random(8,792),-100,25,50)
    troopIcon.shapeColor = "lightgreen"
    troopIcon.velocityY=4
    troopIcon.lifetime=300
    troopState=1
  }
    //kill
    for(i=0;i<enemies.length;i++){
      if(enemies[i].isTouching(commander)){
        if(frameCount%10==0){
          med = createSprite(enemies[i].x,enemies[i].y,10,10)
          med.shapeColor = "white"
          med.depth=-1
          meds.push(med)
        }
        else{
          coin = createSprite(enemies[i].x,enemies[i].y,10,10)
          coin.shapeColor = "yellow"
          coins.push(coin)
        }
        enemies[i].y=800
        enemies[i].destroy();
      }
    }
    for(i=0;i<enemies.length;i++){
        if(enemies[i].isTouching(bullets)){
          if(frameCount%5==0){
            med = createSprite(enemies[i].x,enemies[i].y,10,10)
            med.shapeColor = "white"
            med.depth=-1
            meds.push(med)
            console.log("med")
          }
          else{
            coin = createSprite(enemies[i].x,enemies[i].y,10,10)
            coin.shapeColor = "yellow"
            coins.push(coin)
          }
          enemies[i].y=800
  
          enemies[i].destroy();
        }
    }
    
  
    //shoot
  
    
      enemyShoot();
  
  
  
  
  
  
  
  
  
  
    
    //damage
    for(i=0;i<enemybullets.length;i++){
      if(enemybullets[i].isTouching(commander)){
      enemybullets[i].destroy
      healthBar.width=healthBar.width-5
      healthBar.x-=2.5
            if(healthBar.width==0){
          healthBar.visible=false
          gotostartpage();
        }
      }
    }
    //collect
    for(i=0;i<coins.length;i++){
    if(coins[i].isTouching(commander)){
      money++
      coins[i].destroy();
    }
  }
    for(i=0;i<meds.length;i++){
   if(meds[i].isTouching(commander)){
        healthBar.width=healthBar.width+50
        healthBar.x+=25
  
  
        meds[i].destroy();
  
    }
  
  
  
    }
    if(troopState==1){
    if(troopIcon.isTouching(commander)){
      newTroop()
      troopIcon.destroy();
      troopState=0
    }
    }
    //controller
    if(keyDown("m")){
      controller="MOUSE"
    }
    if(keyDown("n")){
      controller="WASD"
    }
  
  if((frameCount-levelstart)==1200){
    gotostartpage();
  }
  
      //pause
  pause()
  
  if(gamestate=="PAUSE"){
    for(i=0;i<enemies.length;i++){
      enemies[i].velocityY=0;
      enemies[i].lifetime=-1
    }
    for(i=0;i<enemybullets.length;i++){
       enemybullets[i].velocityY=0
       enemybullets[i].velocityX=0
       enemybullets[i].lifetime=-1 
    }
    for(i=0;i<bullets.length;i++){
      bullets[i].velocityY=0 
      bullets[i].velocityX=0
      bullets[i].lifetime=-1 
   }
   if(troopState==1){
   troopIcon.velocityY=0
   }
   
  
  }
  
  }
 }
 function lv2(){
  if(gamestate=="LEVEL2"){

    if(healthBar.width>200){
      healthBar.width=200
      healthBar.x=125
    }
    //move
  
    if(controller=="WASD"){
    if(keyDown("up")||keyDown("w")){
      commander.y-=8
    }
    if(keyDown("down")||keyDown("s")){
      commander.y+=8
    }
    if(keyDown("left")||keyDown("a")){
      commander.x-=12
    }
    if(keyDown("right")||keyDown("d")){
      commander.x+=12
    }
    }
    if(controller=="MOUSE"){
    commander.x=World.mouseX
    commander.y=World.mouseY
    }
    if(commander.isTouching(topwall)){
      commander.y+=8
    }
    if(commander.isTouching(bottomwall)){
      commander.y-=8
    }
    if(commander.isTouching(leftwall)){
      commander.x+=12
    }
    if(commander.isTouching(rightwall)){
      commander.x-=12
    }
    //troops
  
    // bullet = createSprite(troop.x,troop.y,10,10)
    // bullet.shapeColor = "blue"
    // bullet.lifetime = 25
    // bullet.velocityY=-enemybulletspeed
    // bullets.push(bullet)
  
    //spawn
    if(frameCount%20==0){

    spawnTroops();

    
  }
  if(frameCount%480==0){
    troopIcon = createSprite(random(8,792),-100,25,50)
    troopIcon.shapeColor = "lightgreen"
    troopIcon.velocityY=4
    troopIcon.lifetime=300
    troopState=1
  }
    //kill
    for(i=0;i<enemies.length;i++){
      if(enemies[i].isTouching(commander)){
        if(frameCount%10==0){
          med = createSprite(enemies[i].x,enemies[i].y,10,10)
          med.shapeColor = "white"
          med.depth=-1
          meds.push(med)
        }
        else{
          coin = createSprite(enemies[i].x,enemies[i].y,10,10)
          coin.shapeColor = "yellow"
          coins.push(coin)
        }
        enemies[i].y=800
        enemies[i].destroy();
      }
    }
    for(i=0;i<enemies.length;i++){
        if(enemies[i].isTouching(bullets)){
          if(frameCount%5==0){
            med = createSprite(enemies[i].x,enemies[i].y,10,10)
            med.shapeColor = "white"
            med.depth=-1
            meds.push(med)
            console.log("med")
          }
          else{
            coin = createSprite(enemies[i].x,enemies[i].y,10,10)
            coin.shapeColor = "yellow"
            coins.push(coin)
          }
          enemies[i].y=800
  
          enemies[i].destroy();
        }
    }
    
  
    //shoot
  
    
      enemyShoot();
  
  
  
  
  
  
  
  
  
  
    
    //damage
    for(i=0;i<enemybullets.length;i++){
      if(enemybullets[i].isTouching(commander)){
      enemybullets[i].destroy
      healthBar.width=healthBar.width-5
      healthBar.x-=2.5
            if(healthBar.width==0){
          healthBar.visible=false
          gotostartpage();
        }
      }
    }
    //collect
    for(i=0;i<coins.length;i++){
    if(coins[i].isTouching(commander)){
      money++
      coins[i].destroy();
    }
  }
    for(i=0;i<meds.length;i++){
   if(meds[i].isTouching(commander)){
        healthBar.width=healthBar.width+50
        healthBar.x+=25
  
  
        meds[i].destroy();
  
    }
  
  
  
    }
    if(troopState==1){
    if(troopIcon.isTouching(commander)){
      newTroop()
      troopIcon.destroy();
      troopState=0
    }
    }
    //controller
    if(keyDown("m")){
      controller="MOUSE"
    }
    if(keyDown("n")){
      controller="WASD"
    }
  
  if((frameCount-levelstart)==1200){
    gotostartpage();
  }
  
      //pause
  pause()
  
  if(gamestate=="PAUSE"){
    for(i=0;i<enemies.length;i++){
      enemies[i].velocityY=0;
      enemies[i].lifetime=-1
    }
    for(i=0;i<enemybullets.length;i++){
       enemybullets[i].velocityY=0
       enemybullets[i].velocityX=0
       enemybullets[i].lifetime=-1 
    }
    for(i=0;i<bullets.length;i++){
      bullets[i].velocityY=0 
      bullets[i].velocityX=0
      bullets[i].lifetime=-1 
   }
   if(troopState==1){
   troopIcon.velocityY=0
   }
   
  
  }
  
  }
 }
 