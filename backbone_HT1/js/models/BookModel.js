var BookModel = Backbone.Model.extend({

	defaults: {
		lastName: '',
		name: '',
		title: '',
		pubYear: '',
		pubHouse: ''
	}
	
/*	initialize: function () {
		this.listenTo(this, 'change:title', this.onChangeTitle)
			.listenTo(this, 'change:author',this.onChangeAuthor);
	},
	
	onChangeTitle: function (model, changedTitle) {
		if (changedTitle === 'podderevyanskiy') {
			this.set('author', "Les'");
		} else {
			console.log('changedTitle: ' + changedTitle);
		}
	},
	
	onChangeAuthor:function (model, changedAuthor) {
		alert(changedAuthor);
	},
	
	validate: function (attrs) {
		if  (attrs.title.constructor.name !== 'String') {
			return 'titlte should be a string';
		}
	}*/
	
});