

// $(function(){
//   $('.fight-button').click(function(fight){
//     if($('hero-class') == fight.fighter){
//       /*alert('fighter');*/
//     }
//  });
// });

//'use strict';



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


var wiz = new Wizard();
var tiny = new Enemy1();


(function updateHealth(){

	$('.health').animate({'width': 3*wiz.health+'px'},'easeInCubic');

	setTimeout(updateHealth,1000);
})();



   $('.fight-button').click(function(fight){

     var heroName = $('.dropdown').val();

      if($('.hero-class')[0]){
       alert(heroName +' wants to fight');
     }
     else if($('.hero-class')[1]){
       alert('Merlin wants to fight');
     }
     else if($('.hero-class')[2]){
       alert('Jake Weary wants to fight');
     }
  });
//
