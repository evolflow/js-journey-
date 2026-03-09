let cart = []
let total= 0

function addProduct(name, price) {

    let product = {
        name,
        price
    }

    cart.push(product)

    total = total + price

    updateCart()
}

function updateCart() {

    document.getElementById("items-count").innerText =
    "Items: " + cart.length

    document.getElementById("total-price").innerText =
    "Total: $" + total

    
    showCart()



}

function clearCart() {

    cart = []

    total = 0 

    updateCart()
}

function removeLastProduct() {

    if (cart.length === 0) {
        return
    }

    let removedProduct = cart.pop()

    total = total - removedProduct.price

    updateCart()
}

function showCart() {

    let cartList = document.getElementById("cart-list")

    cartList.innerHTML = ""

    for (let i = 0; i < cart.length; i++) {

        let item = cart[i]

        cartList.innerHTML += item.name + " - $" + item.price +
         "<button onclick='removeProduct(" + i + ")'>Remove</button><br>"
    }

    function removedProduct(index) {
        let removedProduct = cart[index]

        total = total - removedProduct.price

        cart.splice(index, 1)

        updateCart()
    }

}