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
        $(".cancel_search_bar").css({"transform":"scale(0.8)", "transition":"transform 1.5s .5s"});
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
        $("i#search_icon").fadeIn(500);
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
        $(".logo_container").children("h1").css({"transform":"scale(0.25)", "transition":"transform 1s"});
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
        $("#single_shoe").attr("src", clicked_shoe_src);

        const shoe = {
            shoe_1:{
            id:"f1",
            price: "Ugx 30,000",
            shoe_title: "Women's Evie™ Zip Wedge Bootie",
            details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_2:{
                id:"f2",
                price: "Ugx 60,000",
                shoe_title: "Women's Platform™ laced heels",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_3:{
                id:"f3",
                price: "Ugx 160,000",
                shoe_title: "Women's lita™ laced high heels",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_4:{
                id:"f4",
                price: "Ugx 120,000",
                shoe_title: "Women's Thigh High Boots",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_5:{
                id:"f5",
                price: "Ugx 100,000",
                shoe_title: "Women's Knee High Boots",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_6:{
                id:"f6",
                price: "Ugx 90,000",
                shoe_title: "Women's Wellington boots",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_7:{
                id:"f7",
                price: "Ugx 80,000",
                shoe_title: "Womens' Cowboy Boots",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_8:{
                id:"f8",
                price: "Ugx 95,000",
                shoe_title: "Womens' Ugg Boots Ferran",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                }
        }        
        
        for(let key_outter in shoe){
            let inner_shoe =shoe[key_outter];
            if(inner_shoe.id == id_of_clicked_shoe){
                $("#buy").removeClass("add_to_bag_inactive").addClass("add_to_bag");  
                $("#buy").css({"box-shadow":"0.1em 0.1em 0.25em #131c2754, 0em 0em 0.25em  #131c2754", "transition":"box-shadow 1s"});             
                $(".shoe_title").text(inner_shoe.shoe_title);
                $(".price").text(inner_shoe.price);
                break;
            }
            else{
                $(".shoe_title").text("This Shoe title isn't set as yet");
                $(".price").text("price: n/a");
                $("#buy").removeClass("add_to_bag").addClass("add_to_bag_inactive");
            }
        }
                      
       $("#single_shoe_specs").css("display", "grid").show(500);
       document.documentElement.scrollTop = 0;
       $("#go_back").show(500);
       $("main").addClass("image_slider_container");
       $("section#img_hero").removeClass("hero").addClass("image_slider");
       $("section.image_slider").on("touchmove", function(){
           if($(this).css("margin-left") == "0px"){
               $(this).animate({marginLeft : "-=210px"}, "slow");
           }else{
           }
           
       });
    });
    $("#go_back").click(function(){
        $("section").filter("#img_hero").show(500);
        $("#single_shoe_specs").hide(500);
        $("#buy").css({"box-shadow":"none", "transition":"box-shadow 1s"});
        $("section#img_hero").removeClass("image_slider").addClass("hero");
    });
    $(".shoe_categpry").click(function(){
        $(this).css({"background-color":"#43516191",
                    "transition":"background 0.5s cubic-bezier(.5,.8,.5,.8)"});
        $(".main-head").fadeTo("fast", 0.5).css("z-index","-1");
    });

});

document.getElementById("date").innerHTML = year.getFullYear();
