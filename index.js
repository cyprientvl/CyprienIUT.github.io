const explorer = document.querySelector("div.homemid p");
const information = document.querySelector("div#frameinfo")
const home = document.querySelector("div#frameHome");
const navinfo = document.querySelector("div.navigation div.information")
const navhome = document.querySelector("div.navigation div.main")
explorer.addEventListener("click", open_info);
navhome.addEventListener("click", open_home);
navinfo.addEventListener("click", open_info);

const iconlanguage = document.querySelector("div.langage div.title ion-icon");
const zone =  document.querySelector("div.langage div.zone");
const language = document.querySelector("div.zone div.title")
language.addEventListener("click", open_nav);

function open_nav(){
	zone.classList.toggle("zoneextande")
	iconlanguage.classList.toggle("zonerotate")
}


function open_home(){
	hide();
	home.classList.add("visible")
}


function open_info(){
	hide();
	information.classList.add("visible");

}

function hide(){
	information.classList.remove("visible");
	home.classList.remove("visible");
}

home.classList.add("visible")
open_nav();

