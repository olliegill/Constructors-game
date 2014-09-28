
(function(){
  'use strict';



// variable declaration for characters
var enemies = [ new Enemy1(), new Enemy2(), new Enemy3()];
var hero = {};
var villain = {};


//health bar
(function updateHealth(){
  $('.health').animate({'width': 3*hero.health+'px'},'ease');
  $('.health2').animate({'width': 3*villain.health+'px'},'ease');

  setTimeout(updateHealth,1000);
})();

// add health implementation 
$('.add-health').on('click tap', function(){
    hero.health = hero.health + 30;
    $('.octicon-heart').css({"visibility": "hidden"});
    $('.add-health').attr('disabled', 'disabled');
});


$('.fight-button').on('click tap', function(){
    var selected = $('.dropdown :selected').attr('id');
    console.log(selected);
    if (selected == "fighter") {
      hero = new Fighter();
    }
    else if (selected == "wizard") {
      hero = new Wizard();
    }
    else if (selected == "archer") {
      hero = new Archer();
    }
    $('.dropdown').empty();
    // generate enemy 
    villain = enemies[Math.floor(Math.random()*3)];
});



// function for villain attack also enables button. 
function atk(){
    villain.attack(hero);
    $('.attack1').attr('disabled', false);
    $('.attack2').attr('disabled',false);

}

// attack button functionality
$('.attack1').on('click tap', function(){
    hero.attack1(villain);
    $('.attack1').attr('disabled','disabled');
    $('.attack2').attr('disabled','disabled');

    setTimeout(atk, 2000);
});

// attack button2 functionality
$('.attack2').on('click tap', function(){
    hero.attack2(villain);
    $('.attack1').attr('disabled','disabled');
    $('.attack2').attr('disabled','disabled');
    setTimeout(atk, 2000);
});



}());



