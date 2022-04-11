$(function () {
    //-------------------------------VARIABLES
    let cancel_icon = "&#10005;";
    let heart_icon = "&#x2661;";
    let heart_icon_clicked = "&#129505;";
    let stars = "&#x2605;&#x2605;&#x2605;&#x2605;";    
    let checkout = "GO TO CHECKOUT";   
    let clear_shopping = "Clear Bag";   
    let num_shoe_pairs = 0;    
    //initial an array to hold shopped shoe prices
    let shoe_prices = [];
    // create span and attach content to it    
    const add_to_bag = "ADD TO BAG";
    const createSpan = `<span>${add_to_bag}`;
    

    //-------------------------------SELECTORS

    const numBagItems = $("#bag_items");
    const itemsDeliveryCost =  $("#delivery_cost");
    const itemsTotalCost = $("#total_cost");
    const itemsSubtotal =  $("#subtotal_cost");
    $("#shopping_alert_container, #dropdown_id, #single_shoe_specs").hide();
    $(".search_shoe_wrapper").hide();
    $("section.shoe_details, #size_collection, .shoe_info_container").hide();
    //picking number of shopped shoes
    let shoe_pairs =  Number($(".bag_n_items p").text()); 
    let clear_shopping_bag = $("#clear_shopping_bag span");
    let clear_shop_items = $("#clear_shopping_bag");
    let go_to_checkout = $("#go_to_checkout span");
    let add_to_shopping_bag =  $("#buy");
    let img_container = $("#img_hero");
    let selected_shoe =  $(".shoes");
    let female_shoes = $(".female_shoes");
    let male_shoes = $(".males_shoes");
    let kids_shoes = $(".kids");
    let bag_items = $(".bag_n_items");
    let shop_bag_message = $("#shopping_cart_notification");
    let cancel_shopping_bag = $("#cancel_shop_bag_alert");
    let num_bag_items = $("#bag_items");
    let checkout_btn = $("#go_to_checkout");
    let num_shopped_pairs = $("#num_shopped_shoes");
    const single_shoe_sec = $("#single_shoe_specs");
    const cancelSelectedShoe = $("#cancel_shoe span");
    const heartIcon = $("#heart_icon span");
    const starsRatings = $("#ratings span");
    const clickedShoeContainer = $("#selected_shoe_container");

    //-------------------------------EVENT LISTENERS
    checkout_btn.on("click", animateCheckoutBtn);
    clear_shop_items.on("click", clearShoppedItems); 
    
    //-------------------------------FUNCTIONS
   localStorage.clear(); 

   function clearShoppedItems(e){
       num_shoe_pairs = 0;
       shoe_prices = [];
       //clear any shoe prices in localStorage;
       localStorage.clear(); 
       //reset shopped items details to 0
       num_shopped_pairs.text(0);
       itemsSubtotal.text(0);
       itemsDeliveryCost.text(0);
       itemsTotalCost.text(0);
       numBagItems.text(`Bag(${num_shoe_pairs})`);
       shop_bag_message.text("Your Bag Is Empty!");
   }

   //this is general func to display details in shop bag
   function showBag(identifier){
        shop_bag_message.toggleClass("moving_hero");
        num_bag_items.toggleClass("moving_bag_items");
        checkout_btn.toggleClass("anim_checkout");
        checkShoppingBag(identifier);
   }

    //increment number of shopped pairs of shoes
    function calcShoePairs(){
        
        let store_shoe_pairs = [];
        //increment the number of shoe pairs by 1 every time "add to bag" is clicked
        num_shoe_pairs++;        
        //adding the incremented number of shoe pairs to an empty arr
        store_shoe_pairs.push(num_shoe_pairs);
        //selecting newly incremented shoe pairs, its at index 0
        let last_shoe_pair = store_shoe_pairs[0];
        
        return last_shoe_pair;
    }

    function animateCheckoutBtn(e){
        checkout_btn.toggleClass("checkout_clicked");
    }
    function removeAnimationCheckoutBtn(e){
        checkout_btn.removeClass("checkout_clicked");
    }  


    function checkShoppingBag(identifier, default_delivery_cost=1000){      
        
        let delivery_cost;
        let total_cost;
        let empty;
        let shopped_shoe_pairs;  
        let subtotal = 0;
        if(identifier === "#buy"){
            shoe_pairs = calcShoePairs(); 
            
            //picking price of shopped shoe
            let selected_shoe_price = $("p.shoe_price").text();  
            //separating symbol Ugx from actual shoe price 
            let splited_string = selected_shoe_price.split(" ");

            //get actual price from the array & converting  string into number
            let real_price = Number(splited_string[1]);       
    
            //adding selected shoe price to an array
            shoe_prices.push(real_price);  
            // suming up prices for selected shoes
            for (let price in shoe_prices){
                subtotal += shoe_prices[price];
            }
            //adding array of shoe_prices in session storage
            localStorage.setItem("shoe_subtotal", subtotal);    
            
        }
        localStorage.setItem("shoe_costs", JSON.stringify(shoe_prices));  
        if (shoe_pairs === 0) {
            delivery_cost = 0;            
            empty = "Your Bag Is Empty!";
           
        } else {
            delivery_cost = default_delivery_cost;
            empty = "Thanks for Shopping with Us";        
        } 
        
        //retrieve subtotal of shopped shoes prices from locacl storage
        subtotal = Number(localStorage.getItem("shoe_subtotal"));
        total_cost = subtotal + delivery_cost;
        shopped_shoe_pairs =  ` Bag(${shoe_pairs})`;
       
        $(".bag_n_items p").text(shoe_pairs);
        // alert( $(".bag_n_items p").text());
        displayCustomerShopping(subtotal, delivery_cost, total_cost, empty, shopped_shoe_pairs);    
       
    }

    function displayCustomerShopping(subtotal, delivery_cost, total_cost, empty, shopped_shoe_pairs){
        $(this).css({ transform: "scale(0.7)", transition: "transform 1s" });
        $("#bag_items_and_cancel_alert").addClass("bag_items_and_cancel_alert");        
        $("#bag_items").text(shopped_shoe_pairs).addClass("bag_items");
        $("#shopping_cart_notification")
            .addClass("shop_bag_notification_content").text(empty);
            go_to_checkout.text(checkout);
        clear_shopping_bag.text(clear_shopping);        
        $("#subtotal_cost").text(subtotal);
        $("#delivery_cost").text(delivery_cost);
        $("#total_cost").text(total_cost);
        $("#shopping_alert_container")
            .toggle().addClass("shop_bag_alert")
            .css({ transform: "translateX(-100%)", transition: "transform 1s" });
            cancel_shopping_bag.html(cancel_icon).addClass("cancel_shop_bag_alert");
        scaleLogo("scale(0.25)")
        imgHeroBlur("blur(0.5rem)");
        mainHeadBlur("blur(0.2rem)");
        footerBlur("blur(0.2rem)");
        setZIndexMainHead(-1);
        setZIndexImgHero(-1);
        setFooterZIndex(-1);  
    }
   


    function setTop() {
        return document.documentElement.scrollTop = 0;
    }
    function footerBlur(blur) {
        $("footer").css({ "filter": blur, "transition": "filter 1s" });
    }
    function singleShoeBlur(blur) {
        $("#single_shoe_specs").css({ "filter": blur });
    }
    function searchBarFocusIn() {
        $(".cancel_search_bar")
            .css({ "transform": "scale(1.3)", "transition": "all 1s" });
        $("#search_shoe").css({ "background": "white" });
    }
    function searchBarFocusOut() {
        $(".cancel_search_bar").css({ "transform": "scale(0.5)" });
        $("#search_shoe")
            .css({ "border": "none", "background-color": "rgba(238, 238, 238, 0.248)", "box-shadow": "0.1em 0.1em 0.25em #131c2754, -0.1em -0.1em 0.25em  #131c2754", "transition": "all 1s" });

    }
    function translateImhHeroToTwenty() {
        img_container
            .css({ "transform": "translateX(20%)", "transition": "transform 1s" });
    }
    function restoreMainHeadZIndex() {
        $(".main-head").fadeTo("fast", 1).css("z-index", "1");
    }

    function scaleLogo(scale) {
        $("#logo1").css({ "transform": scale, "transition": "transform 1s" });
    }
    function setFooterZIndex(value) {
        $("footer").css({ "z-index": value });
    }
    function restoreImgHeroPosition() {
        img_container
            .css({ "transform": "translateX(0%)", "transition": "transform 1s" });
    }
    function imgHeroBlur(blur) {
        img_container.css({ "filter": blur, "transition": "filter 1s" });
    }

    function displayCancelIcon(identifier, cancel) {
        $(identifier).html(cancel);
    }
    function scaleHeart(scale) {
        $("#heart_icon").css({ "transform": scale, "transition": "transform 1.5s" });
    }
    function hideDropdownMenu() {
        $("#dropdown_id")
            .css({ "transform": "translateX(-100%) scaleX(0.25)", "transition": "transform 1s" }).toggle(1000);
    }

    function setZIndexMainHead(z_index_num) {
        $(".main-head").css({ "z-index": z_index_num });
    }
    function setTranslateDropdown() {
        $("#dropdown_id")
            .toggle("slow")
            .css({ "transform": "translateX(0%)", "transition": "transform 1s" })
    }
    function setZIndexImgHero(z_index_num) {
        img_container.css({ "z-index": z_index_num });
    }
    function setZIndexDropdown_menu() {
        $("#dropdown_id").css({ "z-index": "1" });
    }
    function mainHeadBlur(blur) {
        $(".main-head").css({ "filter": blur, "transition": "filter 1s" });
    }
    function scaleCancelSearchIcon(scale, transition) {
        $(".cancel_search_bar").css({ "transform": scale, "transition": transition });
    }

    $("#search_icon").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).css({ transform: "scale(0.7)", transition: "transform 1s" });
        $(".main-head").fadeOut(100, function () {
            imgHeroBlur("blur(0.2rem)");
            img_container.css({ opacity: "0.7", transition: "opacity 1s" });

            $(".search_shoe_wrapper").toggle("fast", function () {
                $("#search_shoe").animate({ width: "100%" }, "fast", function () {
                    $(this).focus();
                    displayCancelIcon("#cancel_search", cancel_icon);
                    searchBarFocusIn();
                    scaleCancelSearchIcon("scale(1.3)", "transform 1s");
                    setZIndexImgHero(-1);
                });
            });
        });

    });

    $(".shoe_size_header span").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass("toggle_shoe_size_collection");
        let shoe_sizes_selector = $("#size_collection");
        
        // //list of shoe available shoe sizes
        // let shoe_sizes = [
        //    30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41,
        // ]

        // for(let size in shoe_sizes ){

        //     //adding li and corresponding benefit dynamically
        //     shoe_sizes_selector.append(`<span>${shoe_sizes[size]}`);
        // }
        $("#size_collection").toggle("slow");

        
    });


    
    $("#shoeinfo_plusicon").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass("toggle_shoe_details");
        $(".shoe_info_container").toggle("slow");

        // let benefits_selector = $("#shoe_benefits_list");
        // let shoe_composition_selector = $("#shoe_composition");
        
        
        // //list of shoe benefits
        // let benefits = [
        //     "Water Friendly and Bouyant",
        //     "industry. Lorem Ipsum has been",
        //     "Lorem Ipsum is simply dummy",
        //     "Breathability and help shred water",
        // ]

        // //list of shoe compositions
        // let shoe_composition_list = [
        //    " Outer: cotton 90%, Calf Leather 10%",
        //    " Lining: Fabric 60%, Goat Skin 40% ",
        //    " Sole: Calf Leather 95%, Rubber 5%",
        // ]

        
        // for(let composition in shoe_composition_list ){

        //     //adding li and corresponding shoe composition dynamically
        //     shoe_composition_selector.append(`<li>${shoe_composition_list[composition]}`);
        // }

        // for(let benefit in benefits ){

        //     //adding li and corresponding benefit dynamically
        //     benefits_selector.append(`<li>${benefits[benefit]}`);
        // }        
    });
    
    //WHEN HEART ICON IS CLICKED, CHANGE CURRENT HEART ICON TO RED
   heartIcon.click(function (e) {
        e.stopPropagation();
        $(this).html(heart_icon_clicked);
    });

    $("#shopping_bag").click(shoppingBagClicked = function () {        
        let shop_bag_id = "#shopping_bag" ; 
        showBag(shop_bag_id);
       
    });
    $(".bag_n_items p").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        shoppingBagClicked();
    });
    cancel_shopping_bag.click(function (e) {
        e.preventDefault();
        //remove animation from shop bag details
        shop_bag_message.toggleClass("moving_hero");
        num_bag_items.toggleClass("moving_bag_items");
        checkout_btn.toggleClass("anim_checkout");

        if(single_shoe_sec.hasClass("singleShoeBlur")){
            //remove blur from selected shoe section
            single_shoe_sec.removeClass("singleShoeBlur");
        }
        
        removeAnimationCheckoutBtn();
        $("#shopping_bag").css({ transform: "scale(1)", transition: "transform 1s" });
        $("#shopping_alert_container")
            .css({ "transform": "translateX(110%)", "transition": "transform 1.5s" })
            .toggle("slow");
        scaleLogo("scale(1)")
        imgHeroBlur("blur(0)");
        mainHeadBlur("blur(0)");
        footerBlur("blur(0)");
        setZIndexMainHead(1);
        setZIndexImgHero(0);
        setFooterZIndex(0);
    });
    $("#cancel_search").click(cancelSearchBar = function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#search_icon").css({ transform: "scale(1)", transition: "transform 2s" });
        $("#search_shoe").animate({ width: "0%" }, "slow", function () {
            imgHeroBlur("blur(0)");
            img_container.css({ opacity: "1", transition: "opacity 1s" });
            $(".search_shoe_wrapper").toggle("slow");
            $(".main-head").fadeIn(500, function () {
                setZIndexImgHero(0);
            });
            $(this).focusout();
            searchBarFocusOut();
        });
    });
    $("#ham_icon").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        setZIndexMainHead(-1);
        setZIndexDropdown_menu();
        setZIndexImgHero(-2);
        imgHeroBlur("blur(0.5rem)");
        displayCancelIcon("#cancel_dropdown", cancel_icon);
        mainHeadBlur("blur(0.5rem)");
        scaleLogo("scale(0.25)")
        setTranslateDropdown();
        translateImhHeroToTwenty();
        footerBlur("blur(0.5rem)");
        setFooterZIndex(-1);
        if ($("#single_shoe_specs").css("display") == "grid") {
            singleShoeBlur("blur(0.2rem)");
        }
    });
    $("#cancel_dropdown").click(cancel_dropdown = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setTop();
        setZIndexImgHero(0);
        setZIndexMainHead(1);
        footerBlur("blur(0)");
        setFooterZIndex(0);
        imgHeroBlur("blur(0)");
        mainHeadBlur("blur(0)");
        if ($("#single_shoe_specs").css("display") == "grid") {
            singleShoeBlur("blur(0)");
        }
        scaleLogo("scale(1)")
        restoreImgHeroPosition();
        hideDropdownMenu();
    });
    function returnShoeInfo(shoe_id) {
        const shoe = {
            shoe_1: {
                id: "f1",
                price: 30000,
                shoe_title: "Women's",
                shoe_subtitle: "Evie™ Zip Wedge Bootie",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features "+
                "from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_2: {
                id: "f2",
                price: 60000,
                shoe_title: "Women's",
                shoe_subtitle: " Platform™ laced heels encompasses",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features"+
                " from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_3: {
                id: "f3",
                price: 160000,
                shoe_title: "Women's",
                shoe_subtitle: " lita™ laced high heels",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features "+
                "from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_4: {
                id: "f4",
                price: 120000,
                shoe_title: "Women's ",
                shoe_subtitle: "Thigh High Cowboy Boots",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features "+
                "from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_5: {
                id: "f5",
                price: 100000,
                shoe_title: "Women's",
                shoe_subtitle: " Knee High Cowboy Boots",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features "+
                "from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_6: {
                id: "f6",
                price: 90000,
                shoe_title: "Women's ",
                shoe_subtitle: "Wellington Cowboy Boots",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features "+
                "from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_7: {
                id: "f7",
                price: 80000,
                shoe_title: "Womens'",
                shoe_subtitle: " Cowboy Boots classic Sorel",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features "+
                "from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_8: {
                id: "f8",
                price: 95000,
                shoe_title: "Womens' ",
                shoe_subtitle: "Ugg Boots Ferrandesign",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_9: {
                id: "f9",
                price: 90000,
                shoe_title: "Womens' ",
                shoe_subtitle: "Ugg Boots Ferrandesign",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_10: {
                id: "f10",
                price: 91000,
                shoe_title: "Womens' ",
                shoe_subtitle: "Ugg Boots Ferrandesign",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_11: {
                id: "f11",
                price: 11000,
                shoe_title: "Womens' ",
                shoe_subtitle: "Ugg Boots Ferrandesign",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_12: {
                id: "f12",
                price: 12000,
                shoe_title: "Womens' ",
                shoe_subtitle: "Ugg Boots Ferrandesign",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_13: {
                id: "f13",
                price: 13000,
                shoe_title: "Womens' ",
                shoe_subtitle: "Ugg Boots Ferrandesign",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_14: {
                id: "f14",
                price: 14000,
                shoe_title: "Womens' ",
                shoe_subtitle: "Ugg Boots Ferrandesign",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_15: {
                id: "f15",
                price: 15000,
                shoe_title: "Womens' ",
                shoe_subtitle: "Ugg Boots Ferrandesign",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            },
            shoe_16: {
                id: "f16",
                price: 16000,
                shoe_title: "Womens' ",
                shoe_subtitle: "Ugg Boots Ferrandesign",
                details: "The EVIE™ ZIP BOOTIE encompasses favorite design features from other boots into one, sleek package. Complete with classic Sorel high-traction sole for extra grip on the go. "
            }
        }
        for (let key_outter in shoe) {
            let inner_shoe = shoe[key_outter];
            if (inner_shoe.id === shoe_id) {
                $("#buy").removeClass("add_to_bag_inactive").addClass("add_to_bag");
                $("#buy")
                    .css({ "box-shadow": "0.1em 0.1em 0.25em #131c2754, 0em 0em 0.25em  #131c2754", "transition": "box-shadow 1s" });
                $("p.shoe_title").text(inner_shoe.shoe_title);
                $("p.shoe_subtitle").text(inner_shoe.shoe_subtitle);
                $("p.shoe_price").text(`UgX ${inner_shoe.price}`);
                
                break;                
            }
            else {
                $(".shoe_title").text("Shoe Type: N/A");
                $(".shoe_price").text("price: n/a");
                $(".shoe_subtitle").text("shoe: n/a");
                $("#buy").removeClass("add_to_bag").addClass("add_to_bag_inactive");
            }
            //return Number(inner_shoe.price);
        }
        
    }
    add_to_shopping_bag.click(function (e) {
        // restricts click event to only this element
        e.stopPropagation();
        // doesnt clear form fields on refresh
        e.preventDefault();  
        //add blur to selected shoe section
        single_shoe_sec.toggleClass("singleShoeBlur");
        //call function to display what is in shopping bag
        const add_shoe_id = "#buy";
        showBag(add_shoe_id);
    });

    //THIS EVENT FIRES WHEN SINGLE SHOE IMG IS CLICKED ON A COLLECTION
    selected_shoe.click(function (e) {   
        // selected img alawys displayed ontop of the page.
        setTop();
        e.stopPropagation(); 
        
        //remove moving_images class   
        selected_shoe.removeClass("moving_images");
        
        let id_of_clicked_shoe = $(this).attr("id");

        returnShoeInfo(id_of_clicked_shoe);

        let clicked_shoe_src = $(this).attr("src");
        $("#single_shoe").attr("src", clicked_shoe_src);
        
        $(".main-head").fadeOut(500, function () {            
            $("#single_shoe_specs").fadeIn(500, function () {
                
                $(this).addClass("shoe_details");
                clickedShoeContainer.toggleClass("selected_shoe_container");
                cancelSelectedShoe.html(cancel_icon);
                starsRatings.html(stars);               
                //adding span element to hold "Add to Bag" word
                 add_to_shopping_bag.append(createSpan);
                heartIcon.html(heart_icon);
                scaleHeart("scale(1.3)");
                $("section#img_hero").removeClass("hero").addClass("image_slider");
                $("section.image_slider").on("touchmove", function () {
                    if ($(this).css("margin-left") === "0px") {
                        $(this).animate({ marginLeft: "-=210px" }, "slow");
                    }
                });
            });
        });
        

    });
    $(".heart").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
    });

    //THIS EVENT FIRES WHEN CANCEL ICON ON SELECTED SHOE IS CLICKED
   cancelSelectedShoe.click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        //remove add_to_bag span
        $("#buy span").remove();
        clickedShoeContainer.toggleClass("selected_shoe_container");

        //add moving_images class
        selected_shoe.addClass("moving_images");
        img_container.removeClass("clicked_shoe");
        $("#single_shoe_specs").toggle("slow", function () {
            $(".main-head").fadeIn(500);
            $("#img_hero").removeClass("image_slider").addClass("hero");
            $("#img_hero").fadeIn(500);
            add_to_shopping_bag.css({ "box-shadow": "none"});
            scaleHeart("scale(0.3)");
        });

    });
    $(".shoe_categpry").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this)
            .css({ "background-color": "#43516191", "transition": "background 0.5s cubic-bezier(.5,.8,.5,.8)" });
        cancel_dropdown();
        restoreMainHeadZIndex();
    });
    let year = new Date();
    $("date").text(year.getFullYear());
});



