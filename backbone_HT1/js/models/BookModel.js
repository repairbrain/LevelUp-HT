var BookModel = Backbone.Model.extend({

	defaults: {
		lastName: '',
		name: '',
		title: '',
		pubYear: '',
		pubHouse: ''
	},
	
	validate: function (attrs) {
		for (var key in attrs) {
			if (attrs[key] === '') {
				console.log('some field is empty');
				return 'some field is empty';
			}
		}
	}
	
});