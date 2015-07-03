/*Реализовать блок на странице с отображением текущего времени
• Блок можно тягать мышью по экрану
• По умолчанию блок отображает время в формате HH: MM: SS ( и изменяет ежесекундно его)
• При нажатии правой клавишей мыши на блоке формат отображение меняется на YYYY:MM:DD
• При нажатии левой кнопкой мыши формат возвращается в исходное состояние*/


window.onload = function() {
	var timeBlock = document.querySelector(".current-time");

	function addZero (arg) {
		if (arg < 10) {
			arg = "0" + arg;
		}
		return arg;
	}

	function addTime () {
	    var date = new Date(),
	    	hour = date.getHours(),
	    	minute = date.getMinutes(),
	    	second = date.getSeconds(),
	    	timeArr = [hour, minute, second];
	    	var newTime = timeArr.map (function(element) {
	    		return addZero(element);
	    	});
	    timeBlock.innerHTML = newTime.join(":");
	}

	function addDate () {
	    var date = new Date(),
	    	year = date.getFullYear(),
	    	month = date.getMonth(),
	    	date = date.getDate();
	    	dateArr = [year, month, date];
	    	var newDate = dateArr.map (function(element) {
	    		return addZero(element);
	    	})
	    timeBlock.innerHTML = newDate.join(":");
	}

	var timeInterval;

	function showTime() {
		clearInterval(timeInterval);
		addTime();
		timeInterval = setInterval(addTime, 1000);
	}

	function showDate(e) {
		e.preventDefault();
		clearInterval(timeInterval);
		addDate();
		timeInterval = setInterval(addDate, 1000);
	}

	showTime();

	timeBlock.addEventListener("click", showTime);
	timeBlock.addEventListener("contextmenu", showDate);


	/*перетаскивание
		идея взята с learn.javascript.ru
	*/
	timeBlock.ondragstart = function () {
		return false;
	}

	timeBlock.onmousedown = function (e) {

		function moveAt(e) {
	    timeBlock.style.left = e.pageX - timeBlock.offsetWidth / 2 + 'px';
	    timeBlock.style.top = e.pageY - timeBlock.offsetHeight / 2 + 'px';
  		}

  		moveAt(e);

  		document.onmousemove = function(e) {
    		moveAt(e);
  		}

  		timeBlock.onmouseup = function() {
    		document.onmousemove = null;
    		timeBlock.onmouseup = null;
  		}
	}

}    


