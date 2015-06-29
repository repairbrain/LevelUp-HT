/*Реализовать блок на странице с отображением текущего времени
• Блок можно тягать мышью по экрану
• По умолчанию блок отображает время в формате HH: MM: SS ( и изменяет ежесекундно его)
• При нажатии правой клавишей мыши на блоке формат отображение меняется на YYYY:MM:DD
• При нажатии левой кнопкой мыши формат возвращается в исходное состояние*/


window.onload = function() {
	var timeBlock = document.querySelector(".current-time");

	function addTime () {
	    var date = new Date();
	    var hour = date.getHours();
	    var minute = date.getMinutes();
	    var second = date.getSeconds();
	    if (hour < 10) {
	    	hour = "0" + hour;
	    }
	    if (minute < 10) {
	    	minute = "0" + minute;
	    }
	    if (second < 10) {
	    	second = "0" + second;
	    }
	    timeBlock.innerHTML = hour + ":" + minute + ":" + second;
	}

	function addDate () {
	    var date = new Date();
	    var year = date.getFullYear();
	    var month = date.getMonth();
	    var date = date.getDate();
	    if (month < 10) {
	    	month = "0" + month;
	    }
	    if (date < 10) {
	    	date = "0" + date;
	    }
	    timeBlock.innerHTML = year + ":" + month + ":" + date;
	}

	var timeInterval;
	var dateInterval;

	function showTime() {
		clearInterval(timeInterval);
		clearInterval(dateInterval);
		addTime();
		timeInterval = setInterval(addTime, 1000);
	}

	function showDate() {
		clearInterval(dateInterval);
		clearInterval(timeInterval);
		addDate();
		dateInterval = setInterval(addDate, 100000);
	}

	showTime();

	timeBlock.addEventListener("click", showTime);
	timeBlock.addEventListener("contextmenu", function (e) {
		e.preventDefault();
		showDate();
	});


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


