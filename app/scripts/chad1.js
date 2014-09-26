// contains the constructors for Wizard and Enemy1 (Tiny)

// constructor for wizard 

function Wizard() {
	this.name = 'Merlin';
	this.health = 100;
	this.numOfMagicAttacks = 3;
	this.nameOfAttack1 = "Wand";
	this.nameOfAttack2 = "Fireball";
}


Wizard.prototype.attack1 = function(enemy){
	if( Math.random() < 0.75) { // 75% chance of hit.
		var damage = Math.floor(Math.random()*10);
		enemy.health = enemy.health - damage;
		console.log('You hit a ' + damage +'. ' + enemy.name +' now has ' + enemy.health + ' hit points.');
	}
	else {
		console.log('You missed!');
	}	
}

Wizard.prototype.attack2 = function(enemy) {
	if (this.numOfMagicAttacks > 0) {
		this.numOfMagicAttacks = this.numOfMagicAttacks - 1;
		if( Math.random() < 0.60) { // 60% chance of hit.
			var damage = Math.floor(Math.random()*30);
			enemy.health = enemy.health - damage;
			console.log('You hit a ' + damage +'. ' + enemy.name +' now has ' + enemy.health + ' hit points.');
		}
		else {
			console.log('You missed!');
		}	
	}
	else {
		console.log(this.name +" has no more magic.")
	}
}



// constructor for Enemy1

function Enemy1() {
	this.name = "Tiny";
	this.health = 100;
	this.nameOfAttack1 = "Scratch";
	this.nameOfAttack2 = "Bite";
}

Enemy1.prototype.attack1 = function(fighter){
	if (Math.random() < 0.75 ) {
		var damage = Math.floor(Math.random()*10);
		fighter.health = fighter.health - damage;
		console.log(fighter.name +' took ' + damage +' damage. ' + fighter.name +' now has ' + fighter.health + ' hit points.');
	}
	else {
		console.log(fighter.name + " dodged attack!");
	}
}

Enemy1.prototype.attack2 = function(fighter) {
	if (Math.random() < .25) {
		var damage = Math.floor(Math.random()*40);
		fighter.health = fighter.health - damage;
		console.log(fighter.name +' took ' + damage +' damage. ' + fighter.name +' now has ' + fighter.health + ' hit points.');
	}
	else {
		console.log(fighter.name + " dodged attack!");
	}
}


