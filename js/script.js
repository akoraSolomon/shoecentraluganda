var input_field = document.getElementById("search_shoe");
var search_form = document.getElementById("search_form");
var dropdown = document.getElementById("dropdown_id");
var img_container = document.getElementById("img_hero");
var cancel = document.getElementById("cancel");
var ham_icon = document.getElementById("ham_icon")
const female_shoe_category = document.getElementsByClassName("female_shoes");

let year = new Date();
img_container.onscroll = function(){
    cancel.style.display = "none";
    dropdown.style.transform = "translateX(-150%)";
    this.style.opacity = "1";
}
cancel.onclick = function(){
    dropdown.style.transform = "translateX(-150%)";
    img_container.style.opacity = "1";
    this.style.display = "none";
    ham_icon.style.display = "inline";
}
img_container.onclick = function(){
    dropdown.style.transform = "translateX(-150%)";
    search_form.style.display = "none";
    this.style.opacity = "1";
    cancel.style.display = "none";
}

document.getElementById('search_icon').onclick = function(){
    search_form.style.width = "90%";
    search_form.style.margin = "auto";
    search_form.style.display = "block";
    dropdown.style.display = "none";
    this.style.fontSize = "1.5rem";
    
}
document.getElementById("ham_icon").onclick = function(){
    search_form.style.display = "none";
    dropdown.style.display = "block";
    dropdown.style.transform = "translateX(0%)";   
    img_container.style.opacity = "0.7";
    cancel.style.display = "inline";
    this.style.display = "none";
}
let my_shoe_category = document.getElementsByClassName("shoe_categpry");
for(let i = 0; i <= my_shoe_category.length; i++){
    my_shoe_category[i].onclick = function(){
        this.style.backgroundColor = "#131c27";
        this.style.color = "#eee";
    }
}


document.getElementById("date").innerHTML = year.getFullYear();
