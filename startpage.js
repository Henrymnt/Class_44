function gotostartpage(){
    gamestate="STARTPAGE"
    healthBar.visible=false
    redHealthBar.visible=false
    commander.visible=false
    if(troopState==1){
    troopIcon.destroy();
    }
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
   function startpage(){
    if(gamestate=="STARTPAGE"){
    textSize(80)
    fill("darkgreen")
    textAlign(CENTER)
    text("DEFENSE COMMANDER",windowWidth/2,125)
    fill("white")
    textSize(45)
    text("Start",windowWidth/2,3*(windowHeight/8)+15)
    text("Shop",windowWidth/2,5*(windowHeight/8)+15)
    text("Options",windowWidth/2,7*(windowHeight/8)+15)
    }
   }
  