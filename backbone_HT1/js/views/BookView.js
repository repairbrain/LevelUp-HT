var BookView = Backbone.View.extend({
	
	events: {
		'click #sendform': 'addBook' // 1
	},
	
	template: _.template('<li><%= lastName %>, <%= name %>, <%= title %>, <%= pubYear %>, <%= pubHouse %></li>'),
	
	initialize: function () {
		this.listenTo(this.model, 'change', this.renderSomeAuthor); // 2
	},
	
	addBook: function () {
		var lastNameValue = $("#lastname").val();
		var nameValue = $("#name").val();
		var titleValue = $("#title").val();
		var pubYearValue = $("#pubYear").val();
		var pubHouseValue = $("#pubHouse").val();

		this.model.set({lastName: lastNameValue, name: nameValue, title: titleValue, pubYear: pubYearValue, pubHouse: pubHouseValue});
	},
	
	renderSomeAuthor: function () {
		var template = this.template(this.model.toJSON());  // 5 // '<div> value from input </div>';
		
		this.$('ul').append(template); //
		
		return this;
	}
	
});
