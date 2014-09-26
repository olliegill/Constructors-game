/* global describe, it */

// constructors include random numbers, and as a result some test fail. 
// But, all test were done without random numbers to verify pass before constructors were updated.
(function () {
    'use strict';

    describe('Wizard', function () {
        	
   		beforeEach(function(){
   			this.enemy = {name:'Tiny',health: 100};
        	this.wizard = new Wizard();
   		});
    	it('should have a name', function () {
        	expect(this.wizard.name).to.equal('Merlin');
    	});
    	it('should have a health status', function(){
    		expect(this.wizard.health).to.equal(100);
    	});
    	it('should have a weak attack name', function(){
    		expect(this.wizard.nameOfAttack1).to.equal("Wand");
    	});
    	it('should have a strong attack name', function(){
    		expect(this.wizard.nameOfAttack2).to.equal("Fireball");	
    	});
    	it('should have weak attack capability', function(){
    		this.wizard.attack1(this.enemy);
    		expect(this.enemy.health < 100).to.be.true; // will fail 25% of time due to randomness of attack chance.
    	});
    	it('should have a magic attack capability with max of three uses', function(){
    		this.wizard.attack2(this.enemy);
    		expect(this.wizard.numOfMagicAttacks).to.equal(2);	
    		this.wizard.attack2(this.enemy);
    		expect(this.wizard.numOfMagicAttacks).to.equal(1);
    		this.wizard.attack2(this.enemy);
    		expect(this.wizard.numOfMagicAttacks).to.equal(0);
    		this.wizard.attack2(this.enemy);
    		expect(this.wizard.numOfMagicAttacks).to.equal(0);
    	});
    });

// Enemy1 constructor testing
    describe("Enemy1", function(){
    	beforeEach(function(){
    		this.fighter = {name: 'fighter' ,health: 100};
    		this.enemy = new Enemy1();
    	});
    	it('should have a name', function(){
    		expect(this.enemy.name).to.equal('Tiny')
    	});
    	it('should have a health status', function(){
    		expect(this.enemy.health).to.equal(100);
    	});
    	it('should have a weak attack capability', function(){
    		this.enemy.attack1(this.fighter);
    		expect(this.fighter.health < 100).to.be.true; // will fail 25% due to randomness of attack chance.
    	});
    	it('should have a strong attack capability', function(){
    		this.enemy.attack2(this.fighter);
    		expect(this.fighter.health < 100).to.be.true; // will fail 75% due to randomness.
    	});
    });

})();
