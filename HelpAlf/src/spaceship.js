// StringCalculator.js
function Electrons() {}
Electrons.prototype.add = function(list) {
	let result = 0;
	
	for (let i = 0; i < list.length; i++) {
		if (list[i] % 2 == 0) {
			continue;
		}
		
		result += list[i] - 1;
	}

	return result;
}
