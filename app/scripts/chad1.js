// contains the constructors for Wizard and Enemy1 (Tiny)

// constructor for wizard 

function Wizard() {
	this.name = 'Link';
	this.health = 100;
	this.numOfMagicAttacks = 3;
	this.nameOfAttack1 = "Wand";
	this.nameOfAttack2 = "Fireball";
	this.damage = 0;
}


Wizard.prototype.attack1 = function(enemy){
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

Wizard.prototype.attack2 = function(enemy) {
	if (this.numOfMagicAttacks > 0) {
		this.numOfMagicAttacks = this.numOfMagicAttacks - 1;
		if( Math.random() < 0.60) { // 60% chance of hit.
			var damage = Math.floor(Math.random()*50 + 20);
			enemy.damage = damage;
			enemy.health = enemy.health - damage;
			console.log('You hit a(n) ' + damage +'. ' + enemy.name +' now has ' + enemy.health + ' hit points.');
		}
		else {
			console.log('You missed!');
			enemy.damage = 0;
		}
	}
	else {
		console.log(this.name +" has no more magic.");
	}
};



// constructor for Enemy1

function Enemy1() {
	this.name = "Tiny";
	this.health = 100;
	this.nameOfAttack1 = "Scratch";
	this.nameOfAttack2 = "Bite";
	this.damage = 0;
}


Enemy1.prototype.attack = function(fighter){

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




