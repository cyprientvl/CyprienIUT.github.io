const allcontent = document.querySelectorAll("div.content");
const allabsulot = document.querySelectorAll("div.parte2");
const body = document.querySelector("body");
const btn = document.querySelectorAll("div.btn p");

btn.forEach(add);
allcontent.forEach(test);



function add(e) {
	e.addEventListener("click", absolutremove)
}

function test(e){

	e.addEventListener("click", () => {

		absolutremove()
		for(let i = 0; i < allcontent.length; i++){

			if(allcontent[i].contains(e)){
				allabsulot[i].classList.add("popp")
			}
		}

		

	})
}

function absolutremove() {
	
	for(let i = 0; i < allabsulot.length; i++){
		allabsulot[i].classList.remove("popp");
	}
}

const iconlanguage = document.querySelector("div.langage div.title ion-icon");
const zone =  document.querySelector("div.langage div.zone");
const language = document.querySelector("div.zone div.title")
language.addEventListener("click", open_nav);

function open_nav(){
	zone.classList.toggle("zoneextande")
	iconlanguage.classList.toggle("zonerotate")
}


const btopopen = document.querySelector("div.btop ion-icon");
const nav = document.querySelector("div#nav")
btopopen.addEventListener("click", open_menu);

function open_menu() {
	nav.classList.toggle("opennavmenu")
}

open_nav();
