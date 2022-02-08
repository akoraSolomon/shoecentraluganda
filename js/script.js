var input_field = document.getElementById("search_shoe");
var search_form = document.getElementById("search_form");
var dropdown = document.getElementById("dropdown_id");
let year = new Date();

document.getElementById('search_icon').onclick = function(){
    search_form.style.width = "98%";
    search_form.style.margin = "auto";
    search_form.style.display = "block";
    
}

document.getElementById("date").innerHTML = year.getFullYear();

document.getElementById("ham_icon").onclick = function(){
    dropdown.style.display = "block";
}