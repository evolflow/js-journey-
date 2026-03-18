let cart = [];

let savedCart = localStorage.getItem("cart");

if (savedCart) {
  cart = JSON.parse(savedCart);
}

function addToCart(name, price){
  let existingItem = cart.find(item => item.name === name);

  if(existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  renderCart(); 
}

function getTotal() {
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  return total;
}

function renderCart() {
  let cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Cart is empty</p>";
  } else {
  cart.forEach(item => {
    cartDiv.innerHTML += `
      <p>
        ${item.name} - ${item.price} x ${item.quantity}
        <button onclick="increase('${item.name}')">+</button>
        <button onclick="decrease('${item.name}')">-</button>
        <button onclick="removeItem('${item.name}')">❌</button>

      </p>
    `;
  });
}

  document.getElementById("total").innerHTML = getTotal();

  localStorage.setItem("cart", JSON.stringify(cart));
}

function increase(name) {
  let item = cart.find(i => i.name === name);
  item.quantity++;
  renderCart();
}

function decrease(name) {
  let item = cart.find(i => i.name === name);

  if (item.quantity > 1) {
    item.quantity--;
  }

  renderCart();
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function openCart() {
  document.getElementById("cartModal").classList.add("active");
  document.getElementById("overlay").classList.add("active");  
}

function closeCart() {
  document.getElementById("cartModal").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

renderCart()
