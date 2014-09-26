/* global describe, it */

(function () {
    'use strict';

    describe('fighter', function(){
      beforeEach(function(){
        this.enemy = {health:100};
        this.fighter = new Fighter();
        //console.log(this.fighter.name);
      });
      it('should have a name', function(){
        expect(this.fighter.name).to.equal('Joe');

      });
      it('should punch', function(){
        expect(this.fighter.nameOfAttack1).to.equal('punch');
      });
      it('should use barstool', function(){
        expect(this.fighter.nameOfAttack2).to.equal('barstool');
      });
      it('should have 100 health', function(){
        expect(this.fighter.health).to.equal(100);
      });
      it('should have punch capability', function(){
        this.fighter.attack1(this.enemy);
        expect(this.enemy.health).to.equal(90);
      });
      it('should have barstool capability', function(){
        this.fighter.attack2(this.enemy);
        expect(this.enemy.health).to.equal(75);
      });
    });

    describe('enemy', function(){
      beforeEach(function(){
        this.player = {health:100};
        this.enemy = new Enemy3();
      });
      it('should have a name', function(){
        expect(this.enemy.name).to.equal('Big Sexy');
      });
      it('should have 150 health', function(){
        expect(this.enemy.health).to.equal(150);
      });
      it('should use hose', function(){
        this.enemy.attack1(this.player);
        expect(this.player.health).to.equal(80);
      });
      it('should use Crazy Axe', function(){
        this.enemy.attack2(this.player);
        expect(this.player.health).to.equal(60);
      });
    });
})();
