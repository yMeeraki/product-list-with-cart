import Cart from "./components/Cart.jsx";
import Dish from "./components/Dish.jsx";
import data from "../data.js";

function App() {
  const allDishes = data.map((dish) => {
    return <Dish key={dish.id} dish={dish} />;
  });

  return (
    <>
      <main>
        <h1 className="heading">Desserts</h1>
        <div class="all-desserts-container">{allDishes}</div>
      </main>
      <Cart />
    </>
  );
}

export default App;
