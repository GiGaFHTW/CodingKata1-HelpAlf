describe('findSpaceship', function() {
	beforeEach(function() {
		spaceship = new Spaceship();

		emptyMap = '';
		mapWithNoX = '.....\n.....\n.....\n.....'
	});

	it('empty map', function() {
		expect(spaceship.find(emptyMap)).toEqual('Spaceship lost forever.');
	});

	it('map with no X', function() {
		expect(spaceship.find(mapWithNoX)).toEqual('Spaceship lost forever.');
	});
});