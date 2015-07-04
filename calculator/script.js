var add = function (arg1, arg2) {
	return parseInt(arg1, 10) + parseInt(arg2, 10);
}

var multiply = function (arg1, arg2) {
	return parseInt(arg1, 10) * parseInt(arg2, 10);
}

var devide = function (arg1, arg2) {
	return parseInt(arg1, 10) / parseInt(arg2, 10);
}

var diff = function (arg1, arg2) {
	return parseInt(arg1, 10) - parseInt(arg2, 10);
}

var modulo = function (arg1, arg2) {
	return parseInt(arg1, 10) % parseInt(arg2, 10);
}

add(4,8);
multiply(5,3); //15
divide(5,3); //1.666(67)
diff(5,3); //2
modulo(5,3);





function Calculator() {
	this.add = function (arg1, arg2) {
		return parseInt(arg1, 10) + parseInt(arg2, 10);
	}
	this.multiply = function (arg1, arg2) {
		return parseInt(arg1, 10) * parseInt(arg2, 10);
	}
	this.divide = function (arg1, arg2) {
		return parseInt(arg1, 10) / parseInt(arg2, 10);
	}
	this.diff = function (arg1, arg2) {
		return parseInt(arg1, 10) - parseInt(arg2, 10);
	}
	this.modulo = function (arg1, arg2) {
		return parseInt(arg1, 10) % parseInt(arg2, 10);
	}
}

var calc = new Calculator();

calc.add(5,3);
calc.multiply(5,3); //15
calc.divide(5,3); //1.666(67)
calc.diff(5,3); //2
calc.modulo(5,3);