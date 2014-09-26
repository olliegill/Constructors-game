/* global describe, it */

(function () {
    'use strict';

    describe('Archer', function () {
      beforeEach(function() {
        this.enemy = new Enemy();
        this.archer = new Archer();
      });
          it('should make a new Archer', function () {
            expect(!!this.archer).to.equal(true);
          });
          it("should have the name 'Justin'", function() {
            expect(this.archer.name).to.equal("Justin");
          });
          it("should have 100 health", function () {
            expect(this.archer.health).to.equal(100);
          });
        // describe("Attack Functions", function() {
        //   it("should knock off at least one hp from an enemy 73.75% of the time", function () {
        //     this.archer.attack1(this.enemy);
        //     expect(this.enemy.health).to.be.below(100);
        //   });
        //   it("should knock off at least one hp from an ememy 30% of the time", function () {
        //     this.archer.attack2(this.enemy);
        //     expect(this.enemy.health).to.be.below(100);
        //   });
        // });
    });
    describe("Enemy", function() {
      it("should make an enemy with 100 hp", function() {
        expect(this.enemy.health).to.equal(100);
      });
      it("should make the name of the enemy 'Jake'", function() {
        expect(this.enemy.name).to.equal("Jake");
      });
    });
})();
