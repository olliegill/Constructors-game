
// Fighter Constructor
function Fighter(){
  this.name = 'Mario';
  this.nameOfAttack1 = 'punch';
  this.nameOfAttack2 = 'barstool';
  this.health = 100;
  this.damage = 0;
}


Fighter.prototype.attack1 = function(enemy){
  if( Math.random() < 0.75) { // 75% chance of hit.
    var damage = Math.floor(Math.random()*10 + 1);
    enemy.damage = damage;
    enemy.health = enemy.health - damage;
    console.log('You hit a(n) ' + damage +'. ' + enemy.name +' now has ' + enemy.health + ' hit points.');
  }
  else {
    console.log('You missed!');
    enemy.damage = 0;
  }
};

Fighter.prototype.attack2 = function(foe) {
  if(Math.random() < 0.3 ) {
    hitAmount = Math.floor(Math.random() * 25 + 15);
    foe.damage = hitAmount;
    foe.health = foe.health - hitAmount;
    console.log("You hit a(n) " + hitAmount + ". " + foe.name + " now has " + foe.health + " hitpoints.");
  } else {
    console.log("You missed!");
    foe.damage = 0;
  }
};

// Fighter.prototype.attack1 = function(enemy){
//   if(Math.random() < 0.75){
//     enemy.health = enemy.health - Math.floor(Math.random()+10);
//   }
//   };

// Fighter.prototype.attack2 = function(enemy){
//   if(Math.random() < 0.25){
//     enemy.health = enemy.health - Math.floor(Math.random()+25);
//   }
// };

// Enemy constructor 
function Enemy3(){
  this.name = 'Big Sexy';
  this.health = 150;
  this.nameOfAttack1 = 'Hose';
  this.nameOfAttack2 = 'Crazy Axe';
  this.damage = 0;
}


Enemy3.prototype.attack = function(fighter){

  if (Math.random() < 0.5) {   // 50% chance of attack1
  if (Math.random() < 0.75 ) {
    var damage = Math.floor(Math.random()*10);
    fighter.damage = damage;
    fighter.health = fighter.health - damage;
    console.log(this.nameOfAttack1);
    console.log(fighter.name +' took ' + damage +' damage. ' + fighter.name +' now has ' + fighter.health + ' hit points.');
  }
  else {
    console.log(fighter.name + " dodged attack!");
    fighter.damage = 0;
  }
  }
    else { // 50% chance of attack2
      if (Math.random() < .25) {
          var damage = Math.floor(Math.random()*40);
          fighter.damage = damage;
          fighter.health = fighter.health - damage;
          console.log(this.nameOfAttack2);
          console.log(fighter.name +' took ' + damage +' damage. ' + fighter.name +' now has ' + fighter.health + ' hit points.');
      }
      else {
          console.log(fighter.name + " dodged attack!");
          fighter.damage = 0;
      }
    }
};




// Enemy3.prototype.attack= function(player){
//   if(Math.random() < 0.80){
//     player.health = player.health - Math.floor(Math.random()+20);
//   }
// };

// Enemy3.prototype.attack2 = function(player){
//   if(Math.random() < 0.50){
//     player.health = player.health - Math.floor(Math.random()+40);
//   }
// };
