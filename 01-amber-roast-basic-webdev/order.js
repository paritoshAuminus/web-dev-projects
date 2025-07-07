const menu = {
    burgerFrenchfries: {
        itemName: "Burger and Frenchfries",
        description: "Savor our juicy burger paired with crispy golden French fries—perfectly seasoned, satisfying, and made fresh daily.",
        price: 12,
        image: "assets/burger-frenchfries.png"
    },
    coldBeverages: {
        itemName: "Cold Beverages",
        description: "Cool down with our refreshing cold beverages—iced, flavorful, and perfect for any sunny day.",
        price: 5,
        image: "assets/cold-beverages.png"
    },
    desserts: {
        itemName: "Desserts",
        description: "Indulge in our sweet desserts—rich flavors, delightful textures, and the perfect end to any meal.",
        price: 7,
        image: "assets/desserts.png"
    },
    hotBeverages: {
        itemName: "Hot Beverages",
        description: "Warm up with our hot beverages—freshly brewed coffee, soothing teas, and comforting flavors in every sip.",
        price: 4,
        image: "assets/hot-beverages.png"
    },
    refreshments: {
        itemName: "Refreshments",
        description: "Light, energizing refreshments crafted to keep you feeling fresh, hydrated, and ready for anything.",
        price: 3,
        image: "assets/refreshment.png"
    },
    specialCombo: {
        itemName: "Specail-combo",
        description: "Enjoy our special combo—mouthwatering mains, and drinks paired together for unbeatable value and taste.",
        price: 18,
        image: "assets/special-combo.png"    
    }
}


let itemQuantity;
let totalAmount;

// Catching values through the URLs
const params = new URLSearchParams(window.location.search);
const item = String(params.get("name"));

// storing all the values in variables
let itemName = menu[item].itemName;
let itemDescription = menu[item].description;
let itemImage = menu[item].image;
let itemPrice = menu[item].price;


// // State management (at the time of submission)
let myform = document.getElementById("form")
myform.addEventListener('submit', function(event) {
    event.preventDefault();
    itemQuantity = document.getElementById('item-quantity').value;

    function totalCalc(itemquant, itemprice) {
        let total = itemquant * itemprice;
        return total;
    }
    
    totalAmount = totalCalc(itemQuantity, itemPrice);

    document.getElementById("item-quantity-end").innerText = itemQuantity;
    document.getElementById("total-amount").innerText = `$${totalAmount}`;
});

// Manipulating document
document.getElementById("item-image").style.backgroundImage = `url('${itemImage}')`;
document.getElementById("item-name").innerText = itemName;
document.getElementById("item-name-end").innerText = itemName;
document.getElementById("item-description").innerText = itemDescription;
document.getElementById("item-price-start").innerText = `Price: $${itemPrice}`;
document.getElementById("item-price-end").innerText = `$${itemPrice}`;



