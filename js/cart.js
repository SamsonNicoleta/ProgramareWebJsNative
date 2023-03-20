let cart = [];
let total = 0;

// Adăugarea unui element în coșul de cumpărături
function addItem(itemName, itemPrice) {
    let item = {
        name: itemName,
        price: itemPrice
    };
    cart.push(item);
    total += itemPrice;
}

// Afisarea coșului de cumpărături
function displayCart() {
    let cartDisplay = document.getElementById("cart");
    cartDisplay.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        let itemDisplay = document.createElement("div");
        itemDisplay.innerHTML = cart[i].name + " - " + cart[i].price + " lei";
        cartDisplay.appendChild(itemDisplay);
    }
    let totalDisplay = document.createElement("div");
    totalDisplay.innerHTML = "Total: " + total + " lei";
    cartDisplay.appendChild(totalDisplay);
}
displayCart();
addItem();