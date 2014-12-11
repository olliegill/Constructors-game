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
    foe.damage = 0;
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
      foe.damage = 0;
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






(function(){
  'use strict';



// variable declaration for characters
var enemies = [ new Enemy1(), new Enemy2(), new Enemy3()];
var hero = {};
var villain = {};
var fighterImages = ["//www.videogamesprites.net/SuperMarioBros1/Characters/Mario/xFiery,P20Mario.gif.pagespeed.ic.ot4UfLXTC9.png",
"//www.videogamesprites.net/Zelda2/Link/Link%20(Normal)%20-%20Stab.gif",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABAAgMAAAAG4J09AAAADFBMVEUAuAAAiP//////pEAwwxouAAAAAnRSTlP/AOW3MEoAAACOSURBVCjPhdAhEoNAEATAMRjMfu3MGEy+hsGMua9hzmAm4orKblJFXOsGSekgkSBpFGxS/4GkjAaHmRGnYVeE7fFBizMcFTYAJsA+C9jC9shgtxcWrMBe0FZgXzKwAjsS2sSSIUAZmECB9IUuXRm2JNlPeE2MhEuSegJ1h9/YpGOTjgLyDwiQAJ+ACTzgDc4a3fVN7/srAAAAAElFTkSuQmCC"];
var enemyImages = ["//www.videogamesprites.net/SuperMarioBros1/Enemies/Castle/Bowser.gif",
"//www.videogamesprites.net/SuperMarioBros1/Enemies/Overworld/Goomba.gif",
"//www.videogamesprites.net/SuperMarioBros1/Enemies/Underground/Buzzy%20Beetle%20-%20Blue.gif"];


//health bar and end game screens
(function updateHealth(){
  $('.health').animate({'width': 3*hero.health+'px'},'ease');
  $('.health2').animate({'width': 3*villain.health+'px'},'ease');
  if (villain.health <= 0 ) {
    $('.victory-cont').addClass('victory-cont2');
    $('.win').addClass('win2');
  }
  if (hero.health <= 0 ) {
    // $('.blood-top').addClass('blood-top2');
    // $('.blood :first-child').addClass('blood-top2').removeClass('blood-top');
    $('.blood-top').animate({
      top: 0,
      opacity: 0.95,
    },4000);
  }

  setTimeout(updateHealth,500);
})();

// add health implementation
$('.add-health').on('click tap', function(){
    hero.health = hero.health + 30;
    $('.octicon-heart').css({"visibility": "hidden"});
    $('.add-health').attr('disabled', 'disabled');
});


$('.fight-button').on('click tap', function(){

    $(this).attr('disabled','disabled');
    var selected = $('.dropdown :selected').attr('id');
    console.log(selected);
    if (selected == "fighter") {
      hero = new Fighter();
      $('.fighter-image img').attr("src",fighterImages[0]);
    }
    else if (selected == "wizard") {
      hero = new Wizard();
      $('.fighter-image img').attr("src",fighterImages[1]);
      $('.fighter-image img').addClass('link-flip ');
    }
    else if (selected == "archer") {
      hero = new Archer();
      $('.fighter-image img').attr("src",fighterImages[2]);
    }
    $('.dropdown').empty();

    // generate enemy
    villain = enemies[Math.floor(Math.random()*3)];
    if (villain.name=="Tiny") {
      $('.enemy-image img').attr("src",enemyImages[1]);
    }
    else if (villain.name=="Jake") {
      $('.enemy-image img').attr("src",enemyImages[2]);
    }
    else if (villain.name=="Big Sexy") {
      $('.enemy-image img').attr("src",enemyImages[0]);
    }

});


// function for villain attack also enables button.
function atk(){
    villain.attack(hero);
    if (hero.damage > 0) {
        $('.text-area :first-child').text(hero.name +' took ' + hero.damage +' damage. ' + hero.name +' now has ' + hero.health + ' hit points.');
    }
    else {
        $('.text-area :first-child').text(hero.name + " Dodged!");
    }
    $('.attack1').attr('disabled', false);
    $('.attack2').attr('disabled',false);

}

// attack button functionality
$('.attack1').on('click tap', function(){

    hero.attack1(villain);
    if (villain.damage > 0) {
      $('.text-area :first-child').text('You hit a(n) ' + villain.damage +'. ' + villain.name +' now has ' + villain.health + ' hit points.');
    }
    else {
      $('.text-area :first-child').text(hero.name + " Missed!");
    }

    $('.attack1').attr('disabled','disabled');
    $('.attack2').attr('disabled','disabled');



    //setTimeout(atk, 1000);

    setTimeout(atk, 2000);
});

// attack button2 functionality
$('.attack2').on('click tap', function(){
    hero.attack2(villain);
    if (hero.name == "Merlin") {
       if (hero.numOfMagicAttacks > 0 ) {
        console.log(hero.numOfMagicAttacks);
          if (villain.damage > 0) {
            $('.text-area :first-child').text('You hit a(n) ' + villain.damage +'. ' + villain.name +' now has ' + villain.health + ' hit points. Only ' + hero.numOfMagicAttacks+ " magic attack(s) remain(s)!");
          }
          else {
            $('.text-area :first-child').text(hero.name + " Missed!" + " Only " + hero.numOfMagicAttacks + " magic attack(s) remain(s)!");
          }
       }
       else {
          $('.text-area :first-child').text("You outta magic yo!");
       }
    }
    else {

        if (villain.damage > 0) {
          $('.text-area :first-child').text('You hit a(n) ' + villain.damage +'. ' + villain.name +' now has ' + villain.health + ' hit points.');
        }
        else {
          $('.text-area :first-child').text(hero.name + " Missed!");
        }
    }
    // if (villain.damage > 0) {
    //   $('.text-area :first-child').text('You hit a(n) ' + villain.damage +'. ' + villain.name +' now has ' + villain.health + ' hit points.');
    // }
    // else {
    //   $('.text-area :first-child').text(hero.name + " Missed!");
    // }
    $('.attack1').attr('disabled','disabled');
    $('.attack2').attr('disabled','disabled');
    setTimeout(atk, 2000);
});



}());
