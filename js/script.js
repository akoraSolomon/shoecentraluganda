$(document).ready(function(){
    $("section.shoe_details").hide();
    $("#cancel_dropdown").hide();
    $("#dropdown_id").hide();
    $("#go_back").hide();    
    function setTop(){         
        return document.documentElement.scrollTop = 0;
    }
    function setHamIconBorder(){
        return $(".menu_hamburger").css({"border":"1px solid #131c27"});
    }
    function fadeFooterTo(duration, visibility){
        $("footer").fadeTo(duration, visibility);
    }
    function fadeSingleShoeTo(duration, visibility){
        $("#single_shoe_specs").fadeTo(duration, visibility);
    }
    function searchBarFocusIn(){
            $(".cancel_search_bar").css({"box-shadow":"none", "color":"#131c27", "background": "none", "border": "none","transform":"scale(1.2)","transition": "all 1s"});
            $("#search_shoe").css({"border": "1px solid #131c27", "background": "white"});
    }
    function searchBarFocusOut(){
        $(".cancel_search_bar").css({"color": "#131c27ad","box-shadow":"0.1em 0.1em 0.2em #131c2754, -0.09em -0.09em 0.2em  #131c2754","transform":"scale(1)", "background-color": "rgba(238, 238, 238, 0.248)"});
        $("#search_shoe").css({"border": "none","background-color": "rgba(238, 238, 238, 0.248)", "box-shadow":"0.1em 0.1em 0.25em #131c2754, -0.1em -0.1em 0.25em  #131c2754","transition": "all 1s"});

    }
    function translateImhHeroToTwenty(){
        $("#img_hero").css({"transform":"translateX(20%)", "transition":"transform 1s"});
    }
    function restoreMainHeadZIndex(){
        $(".main-head").fadeTo("fast", 1).css("z-index","1");
    }

    function scaleLogo(scale){
        $(".logo_container").children("h1").css({"transform":scale, "transition":"transform 1s"});
    }
    function setFooterZIndex(value){
        $("footer").css({"z-index": value});
    }
    function fadeImgHeroTo(half){
        $("#img_hero").fadeTo("fast", half);
    }

    function displayCancelDropdown(){
        $("#cancel_dropdown").css("display","inline");
    }
    function scaleHeart(scale){
        $(".heart span").css({"transform":scale, "transition":"transform 1.5s"});
    }
    
    function setZIndexMainHead(z_index_num){
        $(".main-head").css({"z-index":z_index_num});
    }
    function setTranslateDropdown(){
        $("#dropdown_id").show(500).css({"transform": "translateX(0%) scaleX(1)", "transition":"transform 1s"})
    }
    function setZIndexImgHero(z_index_num){
        $("#img_hero").css({"z-index":z_index_num});
    }
    function setZIndexDropdown_menu(){
        $("#dropdown_id").css({"z-index":"1"});
    }
    function fadeMainHeadTo(duration, visibility){
        $(".main-head").fadeTo(duration, visibility);
    }
    function scaleCancelSearchIcon(scale, transition){
        $(".cancel_search_bar").css({"transform":scale, "transition":transition});
    }
    
    $("#search_icon").click(function(){
        $(".main-head").fadeOut(100, function(){
            $(".search_shoe_wrapper").fadeIn(100, function(){
                $("#search_shoe").animate({width:"100%"},"slow", function(){
                    $(this).focus();
                    searchBarFocusIn();
                });
                scaleCancelSearchIcon("scale(0.7)", "transform 1s" )
                setZIndexImgHero(-1); 
            });
        });      
           
    });
    $("#shopping_bag").click(function(){
        let empty = "Shopping Bag Is Empty!";
        let cancel_alert = "&#10005;";
        $("#shopping_cart_notification").addClass("shop_bag_notification_content").text(empty);
        $("#shopping_alert_container").fadeIn(500).addClass("shop_bag_alert");
        $("#cancel_shop_bag_alert").html(cancel_alert).addClass("cancel_shop_bag_alert");
        fadeImgHeroTo(0.3);
        fadeMainHeadTo("fast", 0.3);
        fadeFooterTo("fast", 0.3);
        setZIndexMainHead(-1);
        setZIndexImgHero(-1);
        setFooterZIndex(-1);
        
    });
    $("#cancel_shop_bag_alert").click(function(){
        $("#shopping_alert_container").fadeOut(500, function(){
            fadeImgHeroTo(1);
            fadeMainHeadTo("fast", 1);
            fadeFooterTo("fast", 1);
            setZIndexMainHead(1);
            setZIndexImgHero(0);
            setFooterZIndex(0);
        });
    });
    $("#cancel_search").click(cancelSearchBar = function(){          
        $("#search_shoe").animate({width:"0%"},"slow", function(){
            $(".search_shoe_wrapper").css({"display":"none"});
            $(".main-head").fadeIn(500, function(){
                setZIndexImgHero(0);
            }); 
            $(this).focusout();
            searchBarFocusOut();
        });         
    });
    $("#ham_icon").click(function(){    
        setHamIconBorder();  
        setZIndexMainHead(-1);
        setZIndexDropdown_menu();
        setZIndexImgHero(-2); 
        fadeImgHeroTo(0.5);
        displayCancelDropdown();
        fadeMainHeadTo("slow", 0.3);
        scaleLogo("scale(0.25)")
        setTranslateDropdown();
        translateImhHeroToTwenty();
        fadeFooterTo("slow", 0.3);
        setFooterZIndex(-1);
        if($("#single_shoe_specs").css("display") == "grid"){
            fadeSingleShoeTo("slow", 0.3);
        }                   
    });
    $("#cancel_dropdown").click(function(){     
        setTop();  
        setZIndexImgHero(0); 
        setZIndexMainHead(1);
        fadeFooterTo("slow", 1);
        setFooterZIndex(0);
        fadeImgHeroTo(1);
        if($("#single_shoe_specs").css("display") == "grid"){
            fadeSingleShoeTo("slow", 1);
        }
        
        $(".main-head").fadeTo("fast", 1).css("z-index","1");
        scaleLogo("scale(1)")
        $("#logo1").css({"transform":"scale(1)", "transition":"transform 1s"});
        $("#img_hero").css({"transform":"translateX(0%)", "transition":"transform 1s"});
        $("#dropdown_id").css({"transform": "translateX(-150%) scaleX(0.25)", "transition":"transform 1s"}).hide(1000);
    });
    $(".shoes").click(function(){   
        setTop();     
        $(".main-head").fadeOut(500, function(){            
            $("#single_shoe_specs").fadeIn(500, function(){
                $("#go_back").fadeIn(500);
                scaleHeart("scale(1.3)");                
                $("main").addClass("image_slider_container");
                $("section#img_hero").removeClass("hero").addClass("image_slider");
                $("section.image_slider").on("touchmove", function(){
                    if($(this).css("margin-left") == "0px"){
                        $(this).animate({marginLeft : "-=210px"}, "slow");
                    }else{
                    }
                    
                });
            });
            $("#single_shoe_specs").css("display", "grid");
        });
        var clicked_shoe_src = $(this).attr("src");
        var id_of_clicked_shoe = $(this).attr("id");
        $("#single_shoe").attr("src", clicked_shoe_src);

        const shoe = {
            shoe_1:{
            id:"f1",
            price: "Ugx 30,000",
            shoe_title: "Women's",
            shoe_subtitle: "Evie™ Zip Wedge Bootie",
            details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_2:{
                id:"f2",
                price: "Ugx 60,000",
                shoe_title: "Women's",
                shoe_subtitle: " Platform™ laced heels encompasses",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_3:{
                id:"f3",
                price: "Ugx 160,000",
                shoe_title: "Women's",
                shoe_subtitle: " lita™ laced high heels",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_4:{
                id:"f4",
                price: "Ugx 120,000",
                shoe_title: "Women's ",
                shoe_subtitle: "Thigh High Cowboy Boots",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_5:{
                id:"f5",
                price: "Ugx 100,000",
                shoe_title: "Women's",
                shoe_subtitle: " Knee High Cowboy Boots",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_6:{
                id:"f6",
                price: "Ugx 90,000",
                shoe_title: "Women's ",
                shoe_subtitle: "Wellington Cowboy Boots",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_7:{
                id:"f7",
                price: "Ugx 80,000",
                shoe_title: "Womens'",
                shoe_subtitle: " Cowboy Boots classic Sorel",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                },
            shoe_8:{
                id:"f8",
                price: "Ugx 95,000",
                shoe_title: "Womens' ",
                shoe_subtitle: "Ugg Boots Ferrandesign",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
                }
        }        
        
        for(let key_outter in shoe){
            let inner_shoe =shoe[key_outter];
            if(inner_shoe.id == id_of_clicked_shoe){
                $("#buy").removeClass("add_to_bag_inactive").addClass("add_to_bag");  
                $("#buy").css({"box-shadow":"0.1em 0.1em 0.25em #131c2754, 0em 0em 0.25em  #131c2754", "transition":"box-shadow 1s"});             
                $("p.shoe_title").text(inner_shoe.shoe_title);
                $("p.shoe_price").text(inner_shoe.price);
                $("p.shoe_subtitle").text(inner_shoe.shoe_subtitle);
                break;
            }
            else{
                $(".shoe_title").text("Shoe Type: N/A");
                $(".shoe_price").text("price: n/a");
                $(".shoe_subtitle").text("shoe: n/a");
                $("#buy").removeClass("add_to_bag").addClass("add_to_bag_inactive");
            }
        }                     
        
    });
    $(".heart").click(function(){
    });
    $("#go_back").click(function(){      
        $("#single_shoe_specs").fadeOut(100, function(){
            $(".main-head").fadeIn(500);
            $("#img_hero").fadeIn(500);
            $("#buy").css({"box-shadow":"none", "transition":"box-shadow 1s"});
            $("#img_hero").removeClass("image_slider").addClass("hero");
            scaleHeart("scale(0.3)");
        });
        
    });
    $(".shoe_categpry").click(function(){
        
        $(this).css({"background-color":"#43516191", "transition":"background 0.5s cubic-bezier(.5,.8,.5,.8)"});
        cancel_dropdown();
        restoreMainHeadZIndex();
    });
    let year = new Date();
    $("date").text(year.getFullYear());
});



