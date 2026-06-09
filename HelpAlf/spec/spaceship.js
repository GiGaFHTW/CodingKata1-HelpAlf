describe('findSpaceship', function() {
	beforeEach(function() {
		spaceship = new Spaceship();

		emptyMap = '';
		mapWithNoX = '.....\n.....\n.....\n.....\n.....'
		mapWithX = '.....\n.....\n.....\n..X..\n.....'
	});

	it('empty map should return "Spaceship lost forever."', function() {
		expect(spaceship.find(emptyMap)).toEqual('Spaceship lost forever.');
	});

	it('map with no X should return "Spaceship lost forever."', function() {
		expect(spaceship.find(mapWithNoX)).toEqual('Spaceship lost forever.');
	});

	it('map X should return Coordinates of Spaceship [x = 2, y = 1]', function() {
		expect(spaceship.find(mapWithX)).toEqual([2, 1]);
	});
});