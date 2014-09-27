function Archer() {
  this.name = "Justin";
  this.health = 100;
}

function Enemy2() {
  this.name = "Jake";
  this.health = 100;
}

Archer.prototype.attack1 = function(foe) {
  if(Math.random() < 0.75 ) {
    hitAmount = Math.floor(Math.random() * 20 + 1);
    foe.health = foe.health - hitAmount;
    console.log("You hit a(n) " + hitAmount + ". " + foe.name + " now has " + foe.health + " hitpoints.");
  } else {
    console.log("You missed!");
    return foe.health;
  }
};

Archer.prototype.attack2 = function(foe) {
  if(Math.random() < 0.3 ) {
    hitAmount = Math.floor(Math.random() * 25 + 15);
    foe.health = foe.health - hitAmount;
    console.log("You hit a(n) " + hitAmount + ". " + foe.name + " now has " + foe.health + " hitpoints.");
  } else {
    console.log("You missed!");
    return foe.health;
  }
};


// Enemy2 constructor
Enemy2.prototype.attack = function(foe) {
  if (Math.random() < 0.5) {
    if(Math.random() < 0.75) {
      hitAmount = Math.floor(Math.random() * 20 + 1);
      foe.health = foe.health - hitAmount;
      console.log("You were hit " + hitAmount + ". You now have "+ foe.health + "hitpoints.");
    } else {
      console.log("They missed!");
      return foe.health;
    }
  } else {
    if(Math.random() < 0.4) {
      hitAmount = Math.floor(Math.random() * 25 + 10);
      foe.health = foe.health - hitAmount;
      console.log("You were hit " + hitAmount + ". You now have "+ foe.health + "hitpoints.");
    } else {
      console.log("They missed!");
      return foe.health;
    }
  }
};
