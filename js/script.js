var input_field = document.getElementById("search_shoe");
var search_form = document.getElementById("search_form");
var dropdown = document.getElementById("dropdown_id");
var search_icon = document.getElementById('search_icon');
var cancel_search = document.getElementById('cancel_search');
var img_container = document.getElementById("img_hero");
var ham_icon = document.getElementById("ham_icon");
var cancel_dropdown = document.getElementById("cancel_dropdown");
var shoes = document.getElementsByClassName("shoes");
var single_shoe = document.getElementById("single_shoe");
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
        document.documentElement.scrollTop = 0; 
        $(".search_shoe_wrapper").slideDown(250);
        $("#cancel_search").fadeIn(1000);
        $("#search_shoe").css({"width":"100%","transition": "all 1s"});
        $("#search_shoe").focus(function(){
            $(this).css({"background-color": "white","transition": "all 1s"});
        });
        $("#search_shoe").focusout(function(){
            $(this).css({"background-color": "rgba(238, 238, 238, 0.248)","transition": "all 1s"});
        });
        $("#dropdown_id").css("display", "none");        
        $("#img_hero").fadeTo("fast", 1);
        $(this).fadeOut(500);
    });
    $("#cancel_search").click(function(){
        $("#search_icon").fadeIn(500);
        $(".search_shoe_wrapper").slideUp(500);
        $(this).fadeOut(500);
        $("#search_shoe").css({"width":"5%","background-color": "rgba(238, 238, 238, 0.248)","transition": "all 0.5s"});
    });
    $("#ham_icon").click(function(){    
        document.documentElement.scrollTop = 0;    
        $("#search_form").slideUp(500);        
        $("#img_hero").fadeTo("fast", 0.5);
        $("#cancel_dropdown").css("display","inline");
        $(".main-head").fadeTo("fast", 0.5).css("z-index","-1");
        $("#logo1").css({"transform":"scale(0.25)", "transition":"transform 1s"});
        $("#dropdown_id").show(500).css({"transform": "translateX(0%) scaleX(1)"});
        $("#img_hero").css({"transform":"translateX(20%)", "transition":"transform 1s"});
      
    });
    $("#cancel_dropdown").click(function(){     
        document.documentElement.scrollTop = 0;   
        $(".main-head").fadeTo("fast", 1).css("z-index","1");
        $("#logo1").css({"transform":"scale(1)", "transition":"transform 1s"});
        $("#img_hero").css({"transform":"translateX(0%)", "transition":"transform 1s"});
        $("#dropdown_id").css({"transform": "translateX(-150%) scaleX(0.25)", "transition":"transform 1s"}).hide(1000);
    });
    $(".shoes").click(function(){
        var clicked_shoe_src = $(this).attr("src");
        var shoe_single_shoe = $("#single_shoe").attr("src", clicked_shoe_src);
       $("#single_shoe_specs").css("display", "grid").show(500);
       document.documentElement.scrollTop = 0;
       $("#go_back").show(500);
    });
    $("#go_back").click(function(){
        $("section").filter("#img_hero").show(500);
        $("#single_shoe_specs").hide(500);
    });
    $(".shoe_categpry").click(function(){
        $(this).css({"background-color":"#43516191",
                    "transition":"background 0.5s cubic-bezier(.5,.8,.5,.8)"});
        $(".main-head").fadeTo("fast", 0.5).css("z-index","-1");
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
}
//display single shoe image
// for(let i = 0; i< shoes.length; i++){
//     shoes[i].onclick = function(){
//         var clicked_shoe_src = this.getAttribute("src");
//         img_container.style.display = "none";
//         single_shoe.src = clicked_shoe_src;
//     }
// }

document.getElementById("date").innerHTML = year.getFullYear();
