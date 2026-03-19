import { useState } from "react"

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  function addItem(name,price) {
    const newCart = [...cart, { name, price }]
    setCart(newCart)
    setTotal(total + price)
  }

  function removeItem(indexToRemove) {
    const item = cart[indexToRemove]

    const newCart = cart.filter((item, index) => index !== indexToRemove)

    setCart(newCart)
    setTotal(total - item.price)
  }

  return (
    <div>
     <h1>My Cart 🛒</h1>

     <button onClick={() => addItem("Apple", 2)}>
      Add Apple (2$)
     </button>

     <button onClick={() => addItem("Banana", 3)}>
      Add Banana (3$)
     </button>

     <button onClick={() => addItem("Orange", 5)}>
      Add Orange (5$)
     </button>

     <h2>Total: {total}$</h2>

     <ul>
      {cart.map((item, index) => (
        <li key={index}>
          {item.name} - {item.price}$

          <button onClick={() => removeItem(index)}>
            ❌
          </button>
        </li>
      ))}
     </ul>
    </div>
  )
}

export default App
  