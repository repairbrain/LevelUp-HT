function Mathematics () {
	function add (a, b) {
		return parseInt(a, 10) + parseInt(b, 10);
	}

	function sub (a, b) {
		return parseInt(a, 10) - parseInt(b, 10);
	}

	function multiply (a, b) {
		return parseInt(a, 10) * parseInt(b, 10);
	}

	function devide (a, b) {
		return parseInt(a, 10) / parseInt(b, 10);
	}

	this.add = add;
	this.sub = sub;
	this.multiply = multiply;
	this.devide = devide;
}