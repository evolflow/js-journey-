let cart = [];

let cartCount = document.getElementById("cart-count");
let cartItems = document.getElementById("cart-items");

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });

    updateCartCount();

    renderCart();

    console.log(cart);
}

function getTotal() {
    let total = 0;

    cart.forEach(function(item) {
        total += item.price;
    });

    console.log("Total:", total);
}

function showCart() {
    cart.forEach(function(item) {
        console.log(item.name + " - $" + item.price);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);

    updateCartCount();

    renderCart();

    console.log(cart);
}

function renderCart() {

    cartItems.innerHTML = "";

    cart.forEach(function(item,index) {
        cartItems.innerHTML +=`
        <li>
          ${item.name} - $${item.price}
          <button onclick="removeFromCart(${index})">remove</button>
        </li>
    `;
    
    });

}