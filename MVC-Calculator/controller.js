function Calculator () {
	var form = document.forms.calculator,
	value1 = form.elements.value1,
	value2 = form.elements.value2,
	result = form.elements.result;

	this.init = function() {
		var operations = new Mathematics();
		form.addEventListener('click', function (e) {
			if (e.target.name === "add") {
				result.value = operations.add(value1.value, value2.value);
			}
			else if (e.target.name === "sub") {
				result.value = operations.sub(value1.value, value2.value);
			}
			else if (e.target.name === "multiply") {
				result.value = operations.multiply(value1.value, value2.value);
			}
			else if (e.target.name === "devide") {
				result.value = operations.devide(value1.value, value2.value);
			}
		});
	};
}