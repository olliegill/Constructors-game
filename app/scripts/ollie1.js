function Fighter(){
  this.name = 'Joe';
  this.nameOfAttack1 = 'punch';
  this.nameOfAttack2 = 'barstool';
  this.health = 100;
}

Fighter.prototype.attack1 = function(enemy){
  if(Math.random() < 0.75){
    enemy.health = enemy.health - Math.floor(Math.random()+10);
  }
  };

Fighter.prototype.attack2 = function(enemy){
  if(Math.random() < 0.25){
    enemy.health = enemy.health - Math.floor(Math.random()+25);
  }
};


function Enemy3(){
  this.name = 'Big Sexy';
  this.health = 150;
  this.nameOfAttack1 = 'Hose';
  this.nameOfAttack2 = 'Crazy Axe';
}

Enemy3.prototype.attack1= function(player){
  if(Math.random() < 0.80){
    player.health = player.health - Math.floor(Math.random()+20);
  }
};

Enemy3.prototype.attack2 = function(player){
  if(Math.random() < 0.50){
    player.health = player.health - Math.floor(Math.random()+40);
  }
};
