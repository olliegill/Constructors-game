
// Fighter Constructor
function Fighter(){
  this.name = 'Joe';
  this.nameOfAttack1 = 'punch';
  this.nameOfAttack2 = 'barstool';
  this.health = 100;
}


Fighter.prototype.attack1 = function(enemy){
  if( Math.random() < 0.75) { // 75% chance of hit.
    var damage = Math.floor(Math.random()*10 + 1);
    enemy.health = enemy.health - damage;
    $('.text1').html('You hit a(n) ' + damage +'. ' + enemy.name +' now has ' + enemy.health + ' hit points.');
  }
  else {
    $('.text1').html('You missed!');
  }
};

Fighter.prototype.attack2 = function(foe) {
  if(Math.random() < 0.3 ) {
    hitAmount = Math.floor(Math.random() * 25 + 15);
    foe.health = foe.health - hitAmount;
    $('.text1').html("You hit a(n) " + hitAmount + ". " + foe.name + " now has " + foe.health + " hitpoints.");
  } else {
    $('.text1').html("You missed!");
    return foe.health;
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
  this.health = 100;
  this.nameOfAttack1 = 'Hose';
  this.nameOfAttack2 = 'Crazy Axe';
}


Enemy3.prototype.attack = function(fighter){

  if (Math.random() < 0.5) {   // 50% chance of attack1
  if (Math.random() < 0.75 ) {
    var damage = Math.floor(Math.random()*10);
    fighter.health = fighter.health - damage;
    $('.text2').html(this.nameOfAttack1);
    $('.text2').html(fighter.name +' took ' + damage +' damage. ' + fighter.name +' now has ' + fighter.health + ' hit points.');
  }
  else {
    $('.text2').html(fighter.name + " dodged attack!");
  }
  }
    else { // 50% chance of attack2
      if (Math.random() < .25) {
          var damage = Math.floor(Math.random()*40);
          fighter.health = fighter.health - damage;
          $('.text2').html(this.nameOfAttack2);
          $('.text2').html(fighter.name +' took ' + damage +' damage. ' + fighter.name +' now has ' + fighter.health + ' hit points.');
      }
      else {
          $('.text2').html(fighter.name + " dodged attack!");
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
