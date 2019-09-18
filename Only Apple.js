const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];

function drawing(){                                  //  функция запустится после загрузки страницы
	let box =document.querySelector("#box");
	let ol=document.createElement("ol");             //  создал список
	ol.id="list"                                     //  назначил ему айди
	box.appendChild(ol)                              //  добавил список к родительскому элементу
	for (let k = 0; k < fruits.length; k++) {        //  на каждое значение масива создаем li 
			let li=document.createElement("li")     
			ol.appendChild(li)						 //  добавил каждую li в наш список
			li.innerHTML=fruits[k]					 //  добавил в каждую li текст из масива
	}

}
	
document.querySelector("#but").onclick=function change(){   
	for (let i = 0; i < fruits.length; i++) {           
		if(fruits[i]=="Apple"){						 //  нашел с помощью цикла значение в масиве которое нужно заменить	
			fruits[i]="Only "+fruits[i];		     //  добавил Only к нему
		}
	let list=document.querySelector("#list")		
			list.remove()							 //  удалил прежний список
drawing()										     //  запустил функцию отрисовки нашего списка уже с новым значением
    }
}													 //  ндеюсь я правильно понял задание ^_^)

