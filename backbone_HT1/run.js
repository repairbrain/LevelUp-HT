$(function () {

	var book = new BookView({
		model: new BookModel(),
		collection: new BookCollection(),
		el: 'body'
	});
	
});