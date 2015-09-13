function Fadein (el, config) {
	this.mainNode = document.querySelector(el);
	this.images = config.images;
	this.currentIndex = 0;
	this.totalImages = this.images.length;
	this.render();	
	this.swipeSpeed = config.swipeSpeed;
	this.container = document.querySelector('.slider');
	this.curImage = this.container.querySelector('.current-image');
	this.prevImage = this.container.querySelector('.prev-image');
	this.nextImage = this.container.querySelector('.next-image');
	this.autoSlider(config);
	if (config.mode !== 'auto') {
		this.gestures();
	}
}

Fadein.prototype = Object.create(Slider.prototype);

Fadein.prototype.prev = function () {
	if (this.currentIndex === 0) {
		this.currentIndex = this.totalImages - 1;
	} else {
		this.currentIndex -= 1;
	}

	var _this = this;

	this.prevImage.classList.remove('hidden');
	this.curImage.style.zIndex = '1';
	this.curImage.style.transition = 'opacity '+(this.swipeSpeed/1000)+'s';
	this.curImage.style.opacity = "0";

	setTimeout(function () {
		_this.curImage.src = _this.images[_this.currentIndex];
		_this.nextImage.src = _this.images[_this.isLast()];
		_this.prevImage.src = _this.images[_this.isFirst()];

		_this.curImage.style.transition = '';
		_this.curImage.style.opacity = '1';
		_this.prevImage.classList.add('hidden');
	}, _this.swipeSpeed);
};

Fadein.prototype.next = function () {
	if (this.currentIndex === this.totalImages - 1) {
		this.currentIndex = 0;
	} else {
		this.currentIndex += 1;
	}

	var _this = this;

	this.nextImage.classList.remove('hidden');
	this.curImage.style.zIndex = '1';
	this.curImage.style.transition = 'opacity '+(this.swipeSpeed/1000)+'s';
	this.curImage.style.opacity = "0";

	setTimeout(function () {
		_this.curImage.src = _this.images[_this.currentIndex];
		_this.nextImage.src = _this.images[_this.isLast()];
		_this.prevImage.src = _this.images[_this.isFirst()];

		_this.curImage.style.transition = '';
		_this.curImage.style.opacity = '1';
		_this.nextImage.classList.add('hidden');
	}, _this.swipeSpeed);
};