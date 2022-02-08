var input_field = document.getElementById("search_shoe");
var search_form = document.getElementById("search_form");
var dropdown = document.getElementById("dropdown_id");
let year = new Date();

document.getElementById('search_icon').onclick = function(){
    search_form.style.width = "90%";
    search_form.style.margin = "auto";
    search_form.style.display = "block";
    dropdown.style.display = "none";
    
}
document.getElementById("ham_icon").onclick = function(){
    search_form.style.display = "none";
    dropdown.style.display = "block";
}

document.getElementById("date").innerHTML = year.getFullYear();
