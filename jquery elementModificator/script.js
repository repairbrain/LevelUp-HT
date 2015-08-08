$(function() {
	function ElemModif (id) {
		var element = $(id);
		var addClassBtn = $('#addClass');
		var removeClassBtn = $('#removeClass');
		var toggleClassBtn = $('#toggleClass');
		var appendBtn = $('#append');
		var prependBtn = $('#prepend');
		var wrapBtn = $('#wrap');

		addClassBtn.click(function() {
			element.addClass('orange');
		})

		removeClassBtn.click(function() {
			element.removeClass('orange');
		})

		toggleClassBtn.click(function() {
			element.toggleClass('orange');
		})

		appendBtn.click(function() {
			element.append('<p>appendText</p>');
		})

		prependBtn.click(function() {
			element.prepend('<p>prependText</p>');
		})

		element.hover(function() {
			element.addClass('orange');
		}, function() {
			element.removeClass('orange');
		})

		wrapBtn.click(function() {
			element.wrap('<div>wrapped</div>');
		})



	}

	var modifContainer = new ElemModif('#container');
});