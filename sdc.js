let account = document.getElementById("toggle"); //functionality for dropdown strats
let info = document.getElementById("showInfo");
let cart = document.getElementById("cart");
let cartItems = document.getElementById("cartItems");
let cartSecond = document.getElementById("cartItem");
let homeToggle = document.getElementById("homeToggle");
let home = document.getElementById("home");
let shopTogggle = document.getElementById("shopToggle");
let shop = document.getElementById("shop");
let shopSubToggle = document.getElementById("shopSubToggle")
let shopSub = document.getElementById("shopSub");
let vendToggle = document.getElementById("vendToggle");
let vend = document.getElementById("vend");
let megaToggle = document.getElementById("mega");
let megaItems = document.getElementById("megaItems");
let blogToggle = document.getElementById("blogToggle");
let blog = document.getElementById("blog");
let blogSubToggle = document.getElementById("blogSubToggle")
let blogSubItem = document.getElementById("blogSubItem");
let PageToggle = document.getElementById("pagetoggle");
let page = document.getElementById("Pages");
let browse = document.getElementById("browse");
let all = document.getElementById("allToggle");
let category = document.getElementById("category");
let arrow = document.getElementById("arrow");
let nav = document.getElementById("nav");
console.log(cartSecond);
account.addEventListener("mouseover", function() {
    if (info.classList.contains("accountInfo")) {
        info.classList.remove("accountInfo")
        info.classList.add("accShow")
    }
})
account.addEventListener("mouseleave", function() {
    info.classList.add("accountInfo")
    info.classList.remove("accShow")

})
cart.addEventListener("mouseenter", function() {
    cartItems.classList.remove("Cart");
    cartItems.classList.add("cartShow")
    cartSecond.classList.remove("Cart-second")
    cartSecond.classList.add("Cart-second-show")
});
cart.addEventListener("mouseleave", function() {
    cartItems.classList.add("Cart");
    cartItems.classList.remove("cartShow")
    cartSecond.classList.add("Cart-second")
    cartSecond.classList.remove("Cart-second-show")
});
homeToggle.addEventListener("mouseenter", function() {
    home.classList.remove("homeHide");
    home.classList.add("home");
});
homeToggle.addEventListener("mouseleave", function() {
    home.classList.add("homeHide");
    home.classList.remove("home")
});
shopTogggle.addEventListener("mouseenter", function() {
    shopSub.classList.add("shopSubItemHide");
    shop.classList.remove("ShopHide");
    shop.classList.add("Shops")
});
shopTogggle.addEventListener("mouseleave", function() {
    shop.classList.add("ShopHide");
    shop.classList.remove("Shops")
});
shopSubToggle.addEventListener("mouseenter", function() {
    shopSub.classList.remove("shopSubItemHide");
    shopSub.classList.add("shopSubItem");
});
shopSubToggle.addEventListener("mouseleave", function() {
    shopSub.classList.add("shopSubItemHide");
    shopSub.classList.remove("shopSubItem");
});
vendToggle.addEventListener("mouseenter", function() {
    vend.classList.remove("vendHide");
    vend.classList.add("Vendors")
});
vendToggle.addEventListener("mouseleave", function() {
    vend.classList.add("vendHide");
    vend.classList.remove("Vendors")
});
megaToggle.addEventListener("mouseenter", function() {
    megaItems.classList.remove("megaHide");
    megaItems.classList.add("mega")
})
megaToggle.addEventListener("mouseleave", function() {
    megaItems.classList.add("megaHide");
    megaItems.classList.remove("mega")
});
blogToggle.addEventListener("mouseenter", function() {
    blog.classList.remove("BlogHide");
    blog.classList.add("Blog")
});
blogToggle.addEventListener("mouseleave", function() {
    blog.classList.add("BlogHide");
    blog.classList.remove("Blog")
});
blogSubToggle.addEventListener("mouseenter", function() {
    blogSubItem.classList.remove("blogSubHide")
    blogSubItem.classList.add("blogSubItem")
});
blogSubToggle.addEventListener("mouseenter", function() {
    blogSubItem.classList.remove("blogSubHide")
    blogSubItem.classList.add("blogSubItem")
});
blogSubToggle.addEventListener("mouseleave", function() {
    blogSubItem.classList.add("blogSubHide")
    blogSubItem.classList.remove("blogSubItem")
});
PageToggle.addEventListener("mouseenter", function() {
    page.classList.remove("PageHide");
    page.classList.add("Pages")
})
PageToggle.addEventListener("mouseleave", function() {
    page.classList.add("PageHide");
    page.classList.remove("Pages")
});
browse.addEventListener("click", function() {
    if (nav.classList.contains("subHide")) {
        nav.classList.remove("subHide");
        nav.classList.add("subItems");
        arrow.innerHTML = "-"

    } else {
        nav.classList.add("subHide");
        nav.classList.remove("subItems");
        arrow.innerHTML = "+"

    }
});
all.addEventListener("click", function() {
    if (nav.classList.contains("subHide")) {
        nav.classList.remove("subHide");
        nav.classList.add("subItems");
        arrow.innerHTML = "-"

    } else {
        nav.classList.add("subHide");
        nav.classList.remove("subItems");
        arrow.innerHTML = "+"
    }
});
category.addEventListener("click", function() {
    if (nav.classList.contains("subHide")) {
        nav.classList.remove("subHide");
        nav.classList.add("subItems");
        arrow.innerHTML = "-"

    } else {
        nav.classList.add("subHide");
        nav.classList.remove("subItems");
        arrow.innerHTML = "+"

    }
});
arrow.addEventListener("click", function() {
        if (nav.classList.contains("subHide")) {
            nav.classList.remove("subHide");
            nav.classList.add("subItems");
            arrow.innerHTML = "-"

        } else {
            nav.classList.add("subHide");
            nav.classList.remove("subItems");
            arrow.innerHTML = "+"

        }
    })
    //dropdown functionality ends here
let milk = document.getElementById("milk");
let milkCount = 0;
let cloth = document.getElementById("clothing");
let clothCount = 5;
let pet = document.getElementById("pet");
let petCount = 12;
let bake = document.getElementById("bake");
let bakeCount = 38;
let fresh = document.getElementById("fresh");
let freshCount = 57;
let milkCounter = window.onload = setInterval(() => {
    milkCount++;
    milk.innerHTML = milkCount;
    if (milkCount == 30) {
        clearInterval(milkCounter);
    }
}, 100);
let clothCounter = window.onload = setInterval(() => {
    clothCount++;
    cloth.innerHTML = clothCount;
    if (clothCount == 35) {
        clearInterval(clothCounter);
    }
}, 100);
let petCounter = window.onload = setInterval(() => {
    petCount++;
    pet.innerHTML = petCount;
    if (petCount == 42) {
        clearInterval(petCounter);
    }
}, 100);
let bakeCounter = window.onload = setInterval(() => {
    bakeCount++;
    bake.innerHTML = bakeCount;
    if (clothCount == 35) {
        clearInterval(bakeCounter);
    }
}, 100);
let freshCounter = window.onload = setInterval(() => {
    freshCount++;
    fresh.innerHTML = freshCount;
    if (freshCount == 87) {
        clearInterval(freshCounter);
    }
}, 100);
let range = document.querySelectorAll("input[type='range'");
for (let iter = 0; iter < range.length; iter++) {
    range[0].addEventListener("change", function() {
        document.getElementById("low").innerHTML = `<b>$${range[0].value}</b>`;
    })
    range[1].addEventListener("change", function() {
        document.getElementById("high").innerHTML = `<b> - $${range[1].value}</b>`;
    })
    if (range[0].value >= range[1].value) {
        alert("eeeeeeeeeee");
    }
}
let prodLinks = document.querySelectorAll(".popularProducts>div>span");
let d = document.querySelectorAll(".popularProducts>div:nth-of-type(n+2)")
for (let link = 0; link < prodLinks.length; link++) {
    for (let sublink = 0; sublink < d.length; sublink++) {
        prodLinks[link].addEventListener("click", function() {
            d[sublink].classList.add("Visi");
        })
        prodLinks[link].addEventListener("mouseleave", function() {
            d[sublink].classList.remove("Visi");
        })
    }
}
let shopDiv = document.querySelectorAll(".ShopByCat>div:nth-of-type(n+2)");
let shopP = document.querySelectorAll(".ShopByCat>div:nth-of-type(n+2)>p");
for (let sD = 0; sD < shopDiv.length; sD++) {
    for (let pD = 0; pD < shopP.length; pD++) {
        shopDiv[sD].addEventListener("mouseover", function() {
            shopP[sD].style.color = "green";
        })

    }
}
for (let sD = 0; sD < shopDiv.length; sD++) {
    for (let pD = 0; pD < shopP.length; pD++) {
        shopDiv[sD].addEventListener("mouseleave", function() {
            shopP[sD].style.color = "black";
        })

    }
}
let foodStuffs = {
    grocery: {
        clas: "images/banner-9.png",
        txt: "Don,t miss amazing grocery Deals",
        col: "yellow",
        para: "Sign Up for the daily newsLetter"
    },
    vegetables: {
        clas: "images/vegetables.png",
        txt: "Fresh Vegetables Big Discount",
        col: "green",
        para: "Save up To 50% off on Your First Order"
    }
}
let indicator = document.querySelectorAll("input[type='radio']")
let ban = document.querySelector(".banner");
let foodCount = 0;
for (let food = 0; food < indicator.length; food++) {
    let resval = indicator[food].value;
    indicator[food].addEventListener("click", function() {
        if (indicator[food].checked) {
            document.getElementById("banner-head").innerHTML = foodStuffs[resval].txt
            ban.style.backgroundImage = `url(${foodStuffs[resval].clas})`;
            ban.classList.add("Visi");
            document.getElementById("banner-text").innerHTML = foodStuffs[resval].para;
            ban.style.backgroundColor = foodStuffs[resval].col;
        }
    })
    indicator[food].addEventListener("mouseleave", function() {
        ban.classList.remove("Visi");
    })
}
let foodInfo = [
    ["images/banner-9.png", "images/vegetables.png"],
    ["Don,t miss amazing grocery Deals", "Fresh Vegetables Big Discount"],
    ["Sign up for the daily newsletter", "Save up To 50% off on Your First Order"],
    ["yellow", "green"]
]
document.querySelector("#bannerHeader").addEventListener("mouseover", function() {
    document.getElementById("prev").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
})
document.querySelector("#bannerHeader").addEventListener("mouseleave", function() {
    document.getElementById("prev").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
})
document.getElementById("next").addEventListener("click", function() {
    foodCount++;
    document.getElementById("banner-head").innerHTML = foodInfo[1][foodCount]
    document.getElementById("banner-text").innerHTML = foodInfo[2][foodCount]
    indicator[foodCount].checked = true;
    document.getElementById("prev").style.visibility = "visible";
    ban.style.backgroundColor = foodInfo[3][foodCount];
    ban.style.backgroundImage = `url(${foodInfo[0][foodCount]})`
    if (foodCount === 1) {
        document.getElementById("next").disabled = true;
        document.getElementById("prev").disabled = false;
        document.getElementById("next").style.cursor = "not-allowed"
        document.getElementById("prev").style.cursor = "pointer"
        document.getElementById("prev").style.backgroundColor = "green"
        document.getElementById("next").style.backgroundColor = "white"
        document.getElementById("prev").style.color = "white"
        document.getElementById("next").style.color = "black";
        ban.classList.add("Visi")
    }
})
document.getElementById("prev").addEventListener("click", function() {
    foodCount--;
    document.getElementById("banner-head").innerHTML = foodInfo[1][foodCount]
    document.getElementById("banner-text").innerHTML = foodInfo[2][foodCount]
    indicator[foodCount].checked = true;
    ban.classList.add("Visi")
    ban.style.backgroundColor = foodInfo[3][foodCount]
    ban.style.backgroundImage = `url(${foodInfo[0][foodCount]})`
    if (foodCount === 0) {
        document.getElementById("prev").disabled = true;
        document.getElementById("next").disabled = false;
        document.getElementById("next").style.cursor = "pointer"
        document.getElementById("prev").style.cursor = "not-allowed"
        document.getElementById("prev").style.backgroundColor = "white"
        document.getElementById("next").style.backgroundColor = "green"
        document.getElementById("next").style.color = "white";
        document.getElementById("prev").style.color = "black";
    }

})
let span = document.querySelectorAll(".banner>div:last-child>button");
console.log(span)