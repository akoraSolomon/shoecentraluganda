$(document).ready(function(){
    $("section.shoe_details").hide();
    $("#shopping_alert_container").hide();
    $("#dropdown_id").hide();
    $("#single_shoe_specs").hide();
    $(".search_shoe_wrapper").hide();

    let cancel_icon = "&#10005;";   
    let heart_icon = "&#x2661;";
    let heart_icon_clicked = "&#129505;";
    let stars = "&#x2605;&#x2605;&#x2605;&#x2605;";
    let add_to_bag = "ADD TO BAG";
     

    let num_shopped_pairs = 0;      
    let shopped_shoe_pairs =` Bag(${num_shopped_pairs})`;
        
    let checkout = "CHECKOUT";    
    let subtotal;
    let delivery_cost;
    let total_cost;
    let empty; 

    if(num_shopped_pairs == 0){
        subtotal = 0;
        delivery_cost = 0;
        total_cost = subtotal + delivery_cost;
        empty = "Your Bag Is Empty!"; 
    }else{
        subtotal = 60000;
        delivery_cost = 2000;
        total_cost = subtotal + delivery_cost;
        $("#shopping_cart_notification").hide();
    } 

    
    function setTop(){         
        return document.documentElement.scrollTop = 0;
    }
    function footerBlur(blur){
        $("footer").css({"filter":blur, "transition":"filter 1s"});
    }
    function singleShoeBlur(blur){
        $("#single_shoe_specs").css({"filter":blur});
    }
    function searchBarFocusIn(){
            $(".cancel_search_bar").css({"transform":"scale(1.3)","transition": "all 1s"});
            $("#search_shoe").css({ "background": "white"});
    }
    function searchBarFocusOut(){
        $(".cancel_search_bar").css({"transform":"scale(0.5)"});
        $("#search_shoe").css({"border": "none","background-color": "rgba(238, 238, 238, 0.248)", "box-shadow":"0.1em 0.1em 0.25em #131c2754, -0.1em -0.1em 0.25em  #131c2754","transition": "all 1s"});

    }
    function translateImhHeroToTwenty(){
        $("#img_hero").css({"transform":"translateX(20%)", "transition":"transform 1s"});
    }
    function restoreMainHeadZIndex(){
        $(".main-head").fadeTo("fast", 1).css("z-index","1");
    }

    function scaleLogo(scale){
        $("#logo1").css({"transform":scale, "transition":"transform 1s"});
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
        $("#dropdown_id").css({"transform": "translateX(-100%) scaleX(0.25)", "transition":"transform 1s"}).toggle(1000);
    }
    
    function setZIndexMainHead(z_index_num){
        $(".main-head").css({"z-index":z_index_num});
    }
    function setTranslateDropdown(){
        $("#dropdown_id").toggle("slow").css({"transform": "translateX(0%)", "transition":"transform 1s"})
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
        $(this).css({transform:"scale(0.7)", transition:"transform 1s"});
        $(".main-head").fadeOut(100, function(){
            imgHeroBlur("blur(0.2rem)");
            $("#img_hero").css({opacity:"0.7", transition:"opacity 1s"});

            $(".search_shoe_wrapper").toggle("fast", function(){
                $("#search_shoe").animate({width:"100%"},"fast", function(){
                    $(this).focus();
                    displayCancelIcon("#cancel_search", cancel_icon);
                    searchBarFocusIn();                    
                    scaleCancelSearchIcon("scale(1.3)", "transform 1s" );
                    setZIndexImgHero(-1); 
                });
            });
        });      
           
    });
    $("#heart_icon").click(function(){
        $(this).html(heart_icon_clicked);
    });
    $("#shopping_bag").click(function(){
        $(this).css({transform:"scale(0.7)", transition:"transform 1s"});
        $("#bag_items_and_cancel_alert").addClass("bag_items_and_cancel_alert");
        $("#shopping_cart_notification").addClass("shop_bag_notification_content").text(empty);
        $("#bag_items").text(shopped_shoe_pairs).addClass("bag_items");
        $("#go_to_checkout").text(checkout);
        $("#subtotal_cost").text(subtotal);
        $("#delivery_cost").text(delivery_cost);
        $("#total_cost").text(total_cost);
        $("#shopping_alert_container").toggle().addClass("shop_bag_alert").css({transform: "translateX(-100%)",transition: "transform 1s"});
        $("#cancel_shop_bag_alert").html(cancel_icon).addClass("cancel_shop_bag_alert");
        scaleLogo("scale(0.25)")
        imgHeroBlur("blur(0.2rem)");
        mainHeadBlur("blur(0.2rem)");
        footerBlur("blur(0.2rem)");
        setZIndexMainHead(-1);
        setZIndexImgHero(-1);
        setFooterZIndex(-1);
    });
    $("#cancel_shop_bag_alert").click(function(){
        $("#shopping_bag").css({transform:"scale(1)", transition:"transform 1s"});
        $("#shopping_alert_container").css({"transform":"translateX(110%)", "transition":"transform 1.5s"}).toggle("slow");
        scaleLogo("scale(1)")
        imgHeroBlur("blur(0)");
        mainHeadBlur("blur(0)");
        footerBlur("blur(0)");
        setZIndexMainHead(1);
        setZIndexImgHero(0);
        setFooterZIndex(0);
    });
    $("#cancel_search").click(cancelSearchBar = function(){   
        $("#search_icon").css({transform:"scale(1)", transition:"transform 2s"});      
        $("#search_shoe").animate({width:"0%"},"slow", function(){
            imgHeroBlur("blur(0)");
            $("#img_hero").css({opacity:"1", transition:"opacity 1s"});
            $(".search_shoe_wrapper").toggle("slow");
            $(".main-head").fadeIn(500, function(){
                setZIndexImgHero(0);
            }); 
            $(this).focusout();
            searchBarFocusOut();
        });         
    });
    $("#ham_icon").click(function(){    
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
            singleShoeBlur("blur(0.2rem)");
        }                   
    });
    $("#cancel_dropdown").click(cancel_dropdown = function(){     
        setTop();  
        setZIndexImgHero(0); 
        setZIndexMainHead(1);
        footerBlur("blur(0)");
        setFooterZIndex(0);
        imgHeroBlur("blur(0)");
        mainHeadBlur("blur(0)");
        if($("#single_shoe_specs").css("display") == "grid"){
            singleShoeBlur("blur(0)");
        }
        scaleLogo("scale(1)")
        restoreImgHeroPosition();
        hideDropdownMenu();
    });
    function returnShoeInfo(shoe_id){
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
            if(inner_shoe.id == shoe_id){
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
    }
    $("#img_hero img").click(function(){   
        $(this).css({border:"1px solid white", transition:"border 1s"});
        setTop();    
        $(".main-head").fadeOut(500, function(){            
            $("#single_shoe_specs").fadeIn(500, function(){
                $(this).addClass("shoe_details");
                $("#cancel_shoe").html(cancel_icon);
                $("#ratings").html(stars);
                $("#buy").text(add_to_bag);                
                $("#heart_icon").html(heart_icon);
                scaleHeart("scale(1.3)");                
                $("section#img_hero").removeClass("hero").addClass("image_slider");
                $("section.img_slider").on("touchmove", function(){
                    if($(this).css("margin-left") == "0px"){
                        $(this).animate({marginLeft : "-=210px"}, "slow");
                    }                    
                });
            });            
        });
        var clicked_shoe_src = $(this).attr("src");
        var id_of_clicked_shoe = $(this).attr("id");

        returnShoeInfo(id_of_clicked_shoe);

        $("#single_shoe").attr("src", clicked_shoe_src);                           
        
    });
    $(".heart").click(function(){
    });
    $("#cancel_shoe").click(function(){    
        $(".shoes").css({border:"none"});  
        $("#single_shoe_specs").toggle("slow", function(){
            $(".main-head").fadeIn(500);
            $("#img_hero").removeClass("image_slider").addClass("hero");
            $("#img_hero").fadeIn(500);  
            $("#buy").css({"box-shadow":"none", "transition":"box-shadow 1s"});
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



