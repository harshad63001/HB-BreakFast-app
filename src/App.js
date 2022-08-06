import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import './App.css'
function App() {

  const [cartIsShowm, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShowm && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjgsPi-2rL5AhUCed4KHW8-A9cQPAgI" className="link">Wanna see the code</a>
    </CartProvider>
  );
}

export default App;
