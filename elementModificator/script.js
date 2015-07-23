/*DOM манипуляции

Создать кнопки, которые модифицируют контейнер
addClass - добавление класса контейнеру
removeClass -удаление класса у контейнера
addTextNode в контейнер
addElement в контейнер
removeElement удаление элемента из контейнера по селектору
  
"serializeAndShow - принимает селектор, который находит форму или узел формы. Собирает её значения в объект вида: 

{
    firstname: 'victor',
    secondname: 'tkachenko', 
    ....
}


и на основании этого объекта строит таблицу, которая будет состоять из ключа и его значения.
Пример:


   
<tr>
        
  <td>firstname</td>
        
  <td>victor</td>
   
</tr>


<tr>
        
  <td>secondname</td>
        
  <td>tkachenko</td>
   
</tr>



Создание элементов и их последующая вставка через createElement, createTextNode и appendChild*/


var obj = document.getElementById("obj");

var addClassBtn = document.getElementById("addClass");
var removeClassBtn = document.getElementById("removeClass");
var addTextNodeBtn = document.getElementById("addTextNode");
var addElementBtn = document.getElementById("addElement");
var removeElementBtn = document.getElementById("removeElement");


function addClass () {
	obj.className = 'greenBack';
}
function removeClass () {
	obj.className = '';
}


addClassBtn.addEventListener("click", addClass);
removeClassBtn.addEventListener("click", removeClass);