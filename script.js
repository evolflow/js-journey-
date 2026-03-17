let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartEl = document.getElementById("cart");
const totalEl = document.getElementById("total");
const clearBtn = document.getElementById("clear-cart");

const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-cart");
const closeBtn = document.getElementById("close-cart");

const modalCart = document.getElementById("modal-cart");
const modalTotal = document.getElementById("modal-total");

renderCart();

// ➕ ДОДАТИ ТОВАР
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
}

// 🎨 РЕНДЕР ОСНОВНОЇ КОРЗИНИ
function renderCart() {
  cartEl.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      ${item.name}
      <button class="minus" data-id="${item.id}">-</button>
      ${item.qty}
      <button class="plus" data-id="${item.id}">+</button>
    `;

    cartEl.appendChild(div);
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  totalEl.textContent = "Total: " + getTotal();
}

// 💰 TOTAL
function getTotal() {
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
  });

  return total;
}

// 🧠 МОДАЛ РЕНДЕР
function renderModalCart() {
  modalCart.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} x${item.qty}`;
    modalCart.appendChild(div);
  });

  modalTotal.textContent = "Total: " + getTotal();
}

// 🖱️ КНОПКИ ADD
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const product = {
      id: Number(button.dataset.id),
      name: button.dataset.name,
      price: Number(button.dataset.price)
    };

    addToCart(product);
  });
});

// ➕ ➖ КОНТРОЛЬ КІЛЬКОСТІ
cartEl.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("minus")) {
    const item = cart.find(item => item.id === id);

    if (item.qty > 1) {
      item.qty--;
    } else {
      cart = cart.filter(item => item.id !== id);
    }
  }

  if (e.target.classList.contains("plus")) {
    const item = cart.find(item => item.id === id);
    item.qty++;
  }

  renderCart();
});

// 🧹 CLEAR
clearBtn.addEventListener("click", () => {
  cart = [];
  renderCart();
});

// 🪟 OPEN MODAL
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  renderModalCart();
});

// ❌ CLOSE MODAL
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});