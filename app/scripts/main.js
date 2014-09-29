
(function(){
  'use strict';



// variable declaration for characters
var enemies = [ new Enemy1(), new Enemy2(), new Enemy3()];
var hero = {};
var villain = {};
var fighterImages = ["http://www.videogamesprites.net/SuperMarioBros1/Characters/Mario/xFiery,P20Mario.gif.pagespeed.ic.ot4UfLXTC9.png",
"http://www.videogamesprites.net/Zelda2/Link/Link%20(Normal)%20-%20Stab.gif",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABAAgMAAAAG4J09AAAADFBMVEUAuAAAiP//////pEAwwxouAAAAAnRSTlP/AOW3MEoAAACOSURBVCjPhdAhEoNAEATAMRjMfu3MGEy+hsGMua9hzmAm4orKblJFXOsGSekgkSBpFGxS/4GkjAaHmRGnYVeE7fFBizMcFTYAJsA+C9jC9shgtxcWrMBe0FZgXzKwAjsS2sSSIUAZmECB9IUuXRm2JNlPeE2MhEuSegJ1h9/YpGOTjgLyDwiQAJ+ACTzgDc4a3fVN7/srAAAAAElFTkSuQmCC"];
var enemyImages = ["http://www.videogamesprites.net/SuperMarioBros1/Enemies/Castle/Bowser.gif",
"http://www.videogamesprites.net/SuperMarioBros1/Enemies/Overworld/Goomba.gif",
"http://www.videogamesprites.net/SuperMarioBros1/Enemies/Underground/Buzzy%20Beetle%20-%20Blue.gif"];


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
    $('.attack1').attr('disabled', false);
    $('.attack2').attr('disabled',false);

}

// attack button functionality
$('.attack1').on('click tap', function(){
    hero.attack1(villain);
    $('.attack1').attr('disabled','disabled');
    $('.attack2').attr('disabled','disabled');


    setTimeout(atk, 1000);
});

// attack button2 functionality
$('.attack2').on('click tap', function(){
    hero.attack2(villain);
    $('.attack1').attr('disabled','disabled');
    $('.attack2').attr('disabled','disabled');
    setTimeout(atk, 1000);
});



}());
