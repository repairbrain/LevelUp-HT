/*Реализовать блок на странице с отображением текущего времени
• Блок можно тягать мышью по экрану
• По умолчанию блок отображает время в формате HH: MM: SS ( и изменяет ежесекундно его)
• При нажатии правой клавишей мыши на блоке формат отображение меняется на YYYY:MM:DD
• При нажатии левой кнопкой мыши формат возвращается в исходное состояние*/


window.onload = function() {

	function Clock (selector) {
		var element = document.querySelector(selector),
			mode = true, // true/false , 'time', 'date'
			timerId = null;

		function addZero (arg) {
			if (arg < 10) {
				arg = "0" + arg;
			}
			return arg;
		}

		function getTime () {
		    var date = new Date(),
		    	timeArr = [date.getHours(),  date.getMinutes(), date.getSeconds()];
	    	var formattedTime = timeArr.map (function(element) {
	    		return addZero(element);
	    	});
		    return formattedTime.join(":");
		}

		function getDate () {
		    var date = new Date(),
		    	dateArr = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
	    	var formattedDate = dateArr.map (function(element) {
	    		return addZero(element);
	    	});
		    return formattedDate.join(":");
		}

		function render () {
			var neededMethod = "";
			if (mode) {
				neededMethod = getTime();
			} else {
				neededMethod = getDate();
			}
			element.innerHTML = neededMethod;
		}


		function init() {
			render();
			timerId = setInterval(render, 1000);
		}

		function destroy() {
			element.innerHTML = null;
			clearInterval(timerId);
		}

		this.init = init;
		this.destroy = destroy;

		element.addEventListener("click", function() {
			mode = true;
			render();
		});
		element.addEventListener("contextmenu", function(e) {
			mode = false;
			e.preventDefault();
			render();
		});


		/*перетаскивание
			идея взята с learn.javascript.ru
		*/
		element.ondragstart = function () {
			return false;
		};

		element.onmousedown = function (e) {

			function moveAt(e) {
		    element.style.left = e.pageX - element.offsetWidth / 2 + 'px';
		    element.style.top = e.pageY - element.offsetHeight / 2 + 'px';
	  		}

	  		moveAt(e);

	  		document.onmousemove = function(e) {
	    		moveAt(e);
	  		};

	  		element.onmouseup = function() {
	    		document.onmousemove = null;
	    		element.onmouseup = null;
	  		};
		};
	}

	var clock = new Clock(".current-time");
	clock.init();
	

};    


