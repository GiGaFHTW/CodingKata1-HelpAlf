describe('findSpaceship', function() {
	beforeEach(function() {
		spaceship = new Spaceship();

		emptyMap = '';
	});

	it('empty map', function() {
		expect(spaceship.find(emptyMap)).toEqual('Spaceship lost forever.');
	});

});