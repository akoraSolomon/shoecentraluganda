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
    $(".search_shoe_wrapper").hide();
    $("section.shoe_details").hide();
    $("#cancel_dropdown").hide();
    $("#dropdown_id").hide();
    $("#go_back").hide();
    $("#search_icon").click(function(){
        document.documentElement.scrollTop = 0; 
        $(".search_shoe_wrapper").slideDown(500);
        $(".cancel_search_bar").css({"transform":"scale(0.5)", "transition":"transform 1.5s .5s"});
        $("#cancel_search").fadeIn(1500);
        $("#search_shoe").animate({width:"100%"},"slow");
        $("#search_shoe").focus(function(){
            $(".cancel_search_bar").css({"box-shadow":"none", "background-color": "#FAEBD7"});
            $(this).css({"background-color": "#FAEBD7","box-shadow":"none","transition": "all 1s"});
        });
        $("#search_shoe").focusout(function(){
            $(".cancel_search_bar").css({"box-shadow":"0.1em 0.1em 0.2em #131c2754, -0.09em -0.09em 0.2em  #131c2754", "background-color": "rgba(238, 238, 238, 0.248)"});
            $(this).css({"background-color": "rgba(238, 238, 238, 0.248)", "box-shadow":"0.1em 0.1em 0.25em #131c2754, -0.1em -0.1em 0.25em  #131c2754","transition": "all 1s"});
        });
        $("#dropdown_id").css("display", "none");        
        $("#img_hero").fadeTo("fast", 1, "swing");
        $(this).fadeOut(500);
    });
    $("#cancel_search").click(function(){
        $("#search_icon").fadeIn(500);
        $(".cancel_search_bar").css({"transform":"scale(1)", "transition":"transform 1.5s"});
        $(".search_shoe_wrapper").slideUp(500);
        $("#search_shoe").animate({width:"5%"},"slow");
        $(this).css({"transform":"scale(0.5)", "transition":"transform 1.5s"}).fadeOut(500);
    });
    $("#ham_icon").click(function(){    
        document.documentElement.scrollTop = 0;        
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
        var id_of_clicked_shoe = $(this).attr("id");
        const shoe = {
            id:"f1",
            price: "Ugx 30,000",
            shoe_title: "Women's Evie™ Zip Wedge Bootie",
            details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
        }
        $(".shoe_title").text(shoe.shoe_title);   
        $("#single_shoe").attr("src", clicked_shoe_src);
        $(".price").text(shoe.price);
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

document.getElementById("date").innerHTML = year.getFullYear();
