var BookView = Backbone.View.extend({
	
	events: {
		'click #sendform': 'addBook',
		'click .delete-book': 'deleteBook'
	},
	
	template: _.template('<li><%= lastName %>, <%= name %>, <%= title %>, <%= pubYear %>, <%= pubHouse %> <button class="delete-book">delete</button></li>'),
	
	initialize: function () {
		this.listenTo(this.model, 'change', this.renderSomeAuthor);
	},
	
	addBook: function () {
		var lastNameValue = $("#lastname").val();
		var nameValue = $("#name").val();
		var titleValue = $("#title").val();
		var pubYearValue = $("#pubYear").val();
		var pubHouseValue = $("#pubHouse").val();

		var values = {lastName: lastNameValue, name: nameValue, title: titleValue, pubYear: pubYearValue, pubHouse: pubHouseValue};

		this.model.set(values, {validate:true});

		/*Коллекция здесь пока только для понтов*/
		this.collection.add(values, {validate:true});
		console.log(this.collection);
	},

	deleteBook: function(event) {
		event.target.parentNode.remove();
	},
	
	renderSomeAuthor: function () {
		var template = this.template(this.model.toJSON()); 
		
		this.$('ul').append(template);
		
		return this;
	}
	
});
