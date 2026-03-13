let cart = [
    {
     name: "T-shirt",
     price: 25,
     quantity: 1
    },
    {
     name: "Shoes",
     price: 80,
     quantity: 1
    }
];

function renderCart() {
  const cartContainer = document.getElementById("cart");

  cartContainer.innerHTML = "";

  cart.forEach((product, index) => {

    cartContainer.innerHTML += `
     <div>
      <p>${product.name}</p>
      <p>${product.price}$</p>
      <p>Quantity: ${product.quantity}</p>

      <button onclick="increase(${index})">+</button>
      <button onclick="decrease(${index})">-</button>
     </div>
    `;
  
  });

  calculateTotal();
}

function increase(index) {
  cart[index].quantity += 1;

  renderCart();

}

function decrease(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;

  }

  renderCart();

}

function calculateTotal() {
  let total = 0;
  
  cart.forEach(product => {

    total += product.price * product.quantity;

  });

  document.getElementById("total").innerText = "Total: $" + total;

}

renderCart();
    

