function Archer() {
  this.name = "Luigi";
  this.health = 100;
  this.damage = 0;
}

function Enemy2() {
  this.name = "Jake";
  this.health = 100;
  this.damage = 0;
}

Archer.prototype.attack1 = function(foe) {
  if(Math.random() < 0.75 ) {
    hitAmount = Math.floor(Math.random() * 20 + 1);
    foe.health = foe.health - hitAmount;
    foe.damage = hitAmount;
    console.log("You hit a(n) " + hitAmount + ". " + foe.name + " now has " + foe.health + " hitpoints.");
  } else {
    console.log("You missed!");
    foe.damage =0;
  }
};

Archer.prototype.attack2 = function(foe) {
  if(Math.random() < 0.3 ) {
    hitAmount = Math.floor(Math.random() * 25 + 15);
    foe.damage = hitAmount;
    foe.health = foe.health - hitAmount;
    console.log("You hit a(n) " + hitAmount + ". " + foe.name + " now has " + foe.health + " hitpoints.");
  } else {
    console.log("You missed!");
    foe.damage = 0;;
  }
};


// Enemy2 constructor
Enemy2.prototype.attack = function(foe) {
  if (Math.random() < 0.5) {
    if(Math.random() < 0.75) {
      hitAmount = Math.floor(Math.random() * 20 + 1);
      foe.damage = hitAmount;
      foe.health = foe.health - hitAmount;
      console.log("You were hit " + hitAmount + ". You now have "+ foe.health + "hitpoints.");
    } else {
      console.log("They missed!");
      foe.damage = 0;;
    }
  } else {
    if(Math.random() < 0.4) {
      hitAmount = Math.floor(Math.random() * 25 + 10);
      foe.health = foe.health - hitAmount;
      foe.damage = hitAmount;
      console.log("You were hit " + hitAmount + ". You now have "+ foe.health + "hitpoints.");
    } else {
      console.log("They missed!");
      foe.damage = 0;
    }
  }
};
