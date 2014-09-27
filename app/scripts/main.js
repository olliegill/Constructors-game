
(function(){
  'use strict';




// health bar styling 
$('.health_bar_container').css({
	"height":"50px",
	"width":"300px",
	"border-radius": "3px",
	"background":"RGBA(175, 17, 28,1)"


});

$('.health').css({
    "height":"50px",
    "width": "300px",
     "border-radius":"3px",
     "background": "RGBA(0, 245, 5, 1)",
});



// begin fight
var enemies = [ new Enemy1(), new Enemy2(), new Enemy3()];
var hero = {};
var villain = {};

//health bar
(function updateHealth(){
  $('.health').animate({'width': 3*hero.health+'px'},'easeInCubic');
  setTimeout(updateHealth,1000);
})();


$('.fight-button').on('click', function(){
    var selected = $('.dropdown :selected').attr('value');
    if (selected == "fighter") {
      hero = new Fighter();
    }
    else if (selected == "wizard") {
      hero = new Wizard();
    }
    else if (selected == "archer") {
      hero = new Archer();
    }
    $('.form').empty();
    // generate enemy 
    villain = enemies[Math.floor(Math.random()*3)];
});


// attack button styling
$('.attack_button').css({
  "height":"100px",
  "width": "100px",
  "background":"teal",
  "display":"block"

});

// attack button2
$('.attack_button2').css({
  "height":"100px",
  "width": "100px",
  "background":"teal",
  "display":"block"
});

$('.comment_box').css({
    "height":"100px",
    "width":"300px",
    "background": "gainsboro"
});

// function for vaillain attack also enables button. 
function atk(){
      villain.attack(hero);
      $('.attack_button').attr('disabled', false);
      $('.attack_button2').attr('disabled',false);
    }

// attack button functionality
$('.attack_button').on('click', function(){

    hero.attack1(villain);

    $('.attack_button').attr('disabled','disabled');
    $('.attack_button2').attr('disabled','disabled');

    // function atk(){
    //   villain.attack(hero);
    //   $('.attack_button').attr('disabled', false);
    // }
    
    setTimeout(atk, 2000);
});

// attack button2 functionality
$('.attack_button2').on('click', function(){

    hero.attack2(villain);

    $('.attack_button').attr('disabled','disabled');
    $('.attack_button2').attr('disabled','disabled');


    // function atk(){
    //   villain.attack(hero);
    //   $('.attack_button').attr('disabled', false);
    // }
    
    setTimeout(atk, 2000);
});



}());







