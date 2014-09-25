/* global describe, it */

(function () {
    'use strict';

    describe('Character', function () {
    	beforeEach(function(){
        	this.wizard = new Wizard();
      	})
        describe('Wizard', function () {
            it('wizard should have a name', function () {
            	expect(this.wizard.name)
            });
        });
    });
})();
