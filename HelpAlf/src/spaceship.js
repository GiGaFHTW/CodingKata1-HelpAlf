//Spaceship.js
function Spaceship() { }

Spaceship.prototype.find = function(map) {
	
	var rows = map.split('\n');
	rows.reverse();

	for(let y = 0; y < rows.length; y++) {
		for(let x = 0; x < rows[y].length; x++) {
			if(rows[y][x] == 'X') {
				return [x, y]
			}
		}
	}
	
	
	return "Spaceship lost forever.";
}