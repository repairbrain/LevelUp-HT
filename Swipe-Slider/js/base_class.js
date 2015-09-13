function Slider () {}	

Slider.prototype.gestures = function() {
	var _this = this;

	this.touchstartX = 0;
	this.touchstartY = 0;
	this.touchendX = 0;
	this.touchendY = 0;

	this.container.addEventListener('touchstart', function(event) {
	    _this.touchstartX = event.changedTouches[0].screenX;
	    _this.touchstartY = event.changedTouches[0].screenY;
	}, false);

	this.container.addEventListener('touchend', function(event) {
	    _this.touchendX = event.changedTouches[0].screenX;
	    _this.touchendY = event.changedTouches[0].screenY;
	    _this.handleGesture();
	}, false); 

	this.container.addEventListener('mousedown', function(event) {
		event.preventDefault();
	    _this.touchstartX = event.screenX;
	    _this.touchstartY = event.screenY;
	}, false);

	this.container.addEventListener('mouseup', function(event) {
	    _this.touchendX = event.screenX;
	    _this.touchendY = event.screenY;
	    _this.handleGesture();
	}, false); 

};

Slider.prototype.handleGesture = function () {
	if (this.touchendX > this.touchstartX) {
    	this.prev();
	}
    if (this.touchendX < this.touchstartX) {
        this.next();
    }
};

Slider.prototype.render = function () {
	var _this = this;
	var	container = document.createElement('div');
	container.className = 'slider';

	function newImage () {
		this.image = document.createElement('img');
		this.image.className = 'slider-img';
		this.image.width = 500;
		this.image.height = 350;
		this.image.alt = "slider-image";
		this.image.src = _this.images[0];
	}

	var currentImage = new newImage();
	currentImage.image.classList.add('current-image');
	container.appendChild(currentImage.image);

	var prevImage = new newImage();
	prevImage.image.src = this.images[this.totalImages - 1];
	prevImage.image.classList.add('hidden', 'prev-image');
	container.appendChild(prevImage.image);

	var nextImage = new newImage();
	nextImage.image.src = this.images[this.currentIndex + 1];
	nextImage.image.classList.add('hidden', 'next-image');
	container.appendChild(nextImage.image);

	this.mainNode.appendChild(container);
};

/*To remove slider app*/
Slider.prototype.destroy = function () {
	if (this.autoSliderInterval) {
		clearInterval(this.autoSliderInterval);
	}
	this.container.remove();
};

Slider.prototype.autoSlider = function (config) {
	if (config.mode === 'auto' || config.mode === 'automanual') {
		this.autoSliderInterval = setInterval(this.next.bind(this), config.swipeDelay);
	}
};

Slider.prototype.isLast = function () {
	if (this.currentIndex === this.totalImages - 1) {
		return 0;
	} else {
		return this.currentIndex + 1;
	}
};

Slider.prototype.isFirst = function () {
	if (this.currentIndex === 0) {
		return this.totalImages - 1;
	} else {
		return this.currentIndex - 1;
	}
};	