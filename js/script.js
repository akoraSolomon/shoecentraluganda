var input_field = document.getElementById("search_shoe");
var search_form = document.getElementById("search_form");

document.getElementById('search_icon').onclick = function(){
    search_form.style.width = "90%";
    search_form.style.margin = "auto";
    search_form.style.display = "inline";
    input_field.style.width = "100%";
    
}

let year = new Date();
document.getElementById("date").innerHTML = year.getFullYear();

var dropdown = document.getElementById("dropdown_id");
document.getElementById("ham_icon").onclick = function(){
    dropdown.style.display = "inline-block";
}