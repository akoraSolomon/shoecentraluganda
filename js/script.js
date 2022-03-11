$(document).ready(function(){
    $("section.shoe_details").hide();
    $(".search_shoe_wrapper").hide();  
    $("#dropdown_id").hide(); 
    let cancel_icon = "&#10005;";   
    let heart_icon = "&#x2661;";
    let stars = "&#x2605;&#x2605;&#x2605;&#x2605;";
    let add_to_bag = "ADD TO BAG";
    function setTop(){         
        return document.documentElement.scrollTop = 0;
    }
    function setBorderOnClickedIcons(identifier){
        if(identifier == ".menu_hamburger"){
            $("#shopping_bag").css({"border":"none"});
            $(identifier).css({"border":"1px solid #131c27"});
        }
        else{
            $(".menu_hamburger").css({"border":"none"});
            $(identifier).css({"border":"1px solid #131c27"});
        }       
    }
    function footerBlur(blur){
        $("footer").css({"filter":blur, "transition":"filter 1s"});
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
    function restoreImgHeroPosition(){
        $("#img_hero").css({"transform":"translateX(0%)", "transition":"transform 1s"});
    }
    function imgHeroBlur(blur){
        $("#img_hero").css({"filter":blur, "transition":"filter 1s"});
    }

    function displayCancelIcon(identifier, cancel){
        $(identifier).html(cancel);
    }
    function scaleHeart(scale){
        $("#heart_icon").css({"transform":scale, "transition":"transform 1.5s"});
    }
    function hideDropdownMenu(){
        $("#dropdown_id").css({"transform": "translateX(-150%) scaleX(0.25)", "transition":"transform 1s"}).hide(1000);
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
    function mainHeadBlur(blur){
        $(".main-head").css({"filter":blur, "transition":"filter 1s"});
    }
    function scaleCancelSearchIcon(scale, transition){
        $(".cancel_search_bar").css({"transform":scale, "transition":transition});
    }
    
    $("#search_icon").click(function(){
        $(".main-head").fadeOut(100, function(){
            $(".search_shoe_wrapper").fadeIn(100, function(){
                $("#search_shoe").animate({width:"100%"},"slow", function(){
                    $(this).focus();
                    displayCancelIcon("#cancel_search", cancel_icon);
                    searchBarFocusIn();                    
                    scaleCancelSearchIcon("scale(0.7)", "transform 1s" );
                    setZIndexImgHero(-1); 
                });
            });
        });      
           
    });
    $("#shopping_bag").click(function(){
        let empty = "Your Bag Is Empty!";        
        let shopped_shoe_pairs = "Bag(0)";

        $("#bag_items_and_cancel_alert").addClass("bag_items_and_cancel_alert");
        $("#shopping_cart_notification").addClass("shop_bag_notification_content").text(empty);
        $("#bag_items").text(shopped_shoe_pairs).addClass("bag_items");
        $("#shopping_alert_container").fadeIn(500).addClass("shop_bag_alert");
        $("#cancel_shop_bag_alert").html(cancel_icon).addClass("cancel_shop_bag_alert");
        scaleLogo("scale(0.25)")
        imgHeroBlur("blur(0.5rem)");
        mainHeadBlur("blur(0.5rem)");
        footerBlur("blur(0.5rem)");
        setZIndexMainHead(-1);
        setZIndexImgHero(-1);
        setFooterZIndex(-1);
        setBorderOnClickedIcons("#shopping_bag");
    });
    $("#cancel_shop_bag_alert").click(function(){
        $("#shopping_alert_container").fadeOut(500, function(){
            scaleLogo("scale(1)")
            imgHeroBlur("blur(0)");
            mainHeadBlur("blur(0)");
            footerBlur("blur(0)");
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
        setBorderOnClickedIcons(".menu_hamburger");
        setZIndexMainHead(-1);
        setZIndexDropdown_menu();
        setZIndexImgHero(-2); 
        imgHeroBlur("blur(0.5rem)");
        displayCancelIcon("#cancel_dropdown",cancel_icon);
        mainHeadBlur("blur(0.5rem)");
        scaleLogo("scale(0.25)")
        setTranslateDropdown();
        translateImhHeroToTwenty();
        footerBlur("blur(0.5rem)");
        setFooterZIndex(-1);
        if($("#single_shoe_specs").css("display") == "grid"){
            fadeSingleShoeTo("slow", 0.3);
        }                   
    });
    $("#cancel_dropdown").click(function(){     
        setTop();  
        setZIndexImgHero(0); 
        setZIndexMainHead(1);
        footerBlur("blur(0)");
        setFooterZIndex(0);
        imgHeroBlur("blur(0)");
        mainHeadBlur("blur(0)");
        if($("#single_shoe_specs").css("display") == "grid"){
            fadeSingleShoeTo("slow", 1);
        }
        scaleLogo("scale(1)")
        restoreImgHeroPosition();
        hideDropdownMenu();
    });
    $(".shoes").click(function(){   
        setTop();     
        $(".main-head").fadeOut(500, function(){            
            $("#single_shoe_specs").fadeIn(500, function(){
                $("#cancel_shoe").addClass("cancel_selected_shoe").html(cancel_icon);
                $("#ratings").html(stars);
                $("#buy").text(add_to_bag);                
                $("#heart_icon").html(heart_icon);
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
    $("#cancel_shoe").click(function(){      
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



