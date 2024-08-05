import Navbar from "./components/Navbar";
import { useState } from "react";
import Body from "./components/Body";
import Menu from "./components/Menu";

function App() {
  const [showCart, setShowCart] = useState(false);
  function toggleCart() {
    setShowCart((showCart) => (showCart = !showCart));
  }

  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((count) => count + 1);
  }

  function decreaseCount() {
    count != 0 ? setCount((count) => count - 1) : count;
  }

  const [itemNumber, setItemNumber] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

  function toggleMenu() {
    setShowMenu((showMenu) => !showMenu);
  }

  return (
    <>
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
      <Navbar
        toggleMenu={toggleMenu}
        toggleCart={toggleCart}
        itemNumber={itemNumber}
      />
      <Body
        itemNumber={itemNumber}
        setItemNumber={setItemNumber}
        showCart={showCart}
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </>
  );
}

export default App;
