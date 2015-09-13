window.onload = function () {
	var config = {
	// arbitrary number of images
	images: [
		'http://funkot.ru/wp-content/uploads/2015/08/brit-goluboglazaya-kisa-lezhit.jpg',
		'http://img1.liveinternet.ru/images/attach/c/7/95/961/95961365_3518263_352353.jpg',
		'http://www.zoopicture.ru/assets/2011/11/IMG_1096.jpg',
		'http://jhorosho.ru/wp-content/uploads/2013/07/354323214.jpg'
	],
	// possible values: 'auto', 'manual', 'automanual'
	mode: 'manual',
	// arbitrary interger (miliseconds)
	swipeSpeed: 500,
	// arbitrary interger (miliseconds). This is used in 'auto' and 'automanual' modes
	swipeDelay: 3000
	};

	// var swipeSlider = new Slide ('.slider-wrap', config);
	var swipeSlider = new Fadein ('.slider-wrap', config);

	// swipeSlider.destroy(); to remove app from page
};