var input_field = document.getElementById("search_shoe");
var search_form = document.getElementById("search_form");
var dropdown = document.getElementById("dropdown_id");
var search_icon = document.getElementById('search_icon');
var cancel_search = document.getElementById('cancel_search');
var img_container = document.getElementById("img_hero");
var ham_icon = document.getElementById("ham_icon");
var cancel_dropdown = document.getElementById("cancel_dropdown");
const female_shoe_category = document.getElementsByClassName("female_shoes");

let year = new Date();
cancel_dropdown.onclick = function(){
    img_container.style.opacity = "1";
    ham_icon.style.display = "inline";
}
img_container.onclick = function(){
    dropdown.style.transform = "translateX(-150%)";
    search_form.style.display = "none";
    this.style.opacity = "1";
    search_icon.style.display = "inline"; 
}

$(document).ready(function(){
    $("#search_icon").click(function(){
        $(".search_shoe_wrapper").slideDown(250);
        $("#dropdown_id").css("display", "none");        
        $("#img_hero").fadeTo("fast", 1);

        $(this).fadeOut(500);
    });
    $("#cancel_search").click(function(){
        $("#search_icon").fadeIn(500);
        $(".search_shoe_wrapper").slideUp(250);
    });
    $("#ham_icon").click(function(){        
        $("#search_form").slideUp(500);
        $("#dropdown_id").show(250);
        $("#dropdown_id").css("transform", "translateX(0%)");
        $("#img_hero").fadeTo("fast", 0.6);
    });
    $("#cancel_dropdown").click(function(){
        $("#dropdown_id").css("transform", "translateX(-150%)");
    });
    $(".shoes").click(function(){

    });

});
// search_icon.onclick = function(){
//     cancel_search.style.display = "inline";
// }
cancel_search.onclick = function(){
    ham_icon.style.display = "inline";
}
ham_icon.onclick = function(){  
    cancel_search.style.display = "none"; 
    search_icon.style.display = "inline"; 
    cancel_dropdown.style.display = "inline";
}
var shoes = document.getElementsByClassName("shoes");
var single_shoe = document.getElementById("single_shoe");
for(let i = 0; i< shoes.length; i++){
    shoes[i].onclick = function(){
        var clicked_shoe_src = this.getAttribute("src");
        img_container.style.display = "none";
        single_shoe.src = clicked_shoe_src;
    }
}

document.getElementById("date").innerHTML = year.getFullYear();
