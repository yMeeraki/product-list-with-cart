import Cart from "./components/Cart.jsx";
import Dish from "./components/Dish.jsx";

function App() {
  return (
    <>
      <main>
        <h1 className="heading">Desserts</h1>
        <div class="all-desserts-container">
          <Dish
            img="https://images.pexels.com/photos/14686152/pexels-photo-14686152.jpeg"
            name="Waffle with Berries"
            type="Waffle"
            cost="$6.50"
          />
          <Dish
            img="https://images.pexels.com/photos/8753645/pexels-photo-8753645.jpeg"
            name="Vanilla Bean Crème Brûlée"
            type="Crème Brûlée"
            cost="$7.00"
          />
          <Dish
            img="https://images.pexels.com/photos/586830/pexels-photo-586830.jpeg"
            name="Macaron Mix of Five"
            type="Macaron"
            cost="$8.00"
          />
          <Dish
            img="https://images.pexels.com/photos/1247672/pexels-photo-1247672.jpeg"
            name="Classic Tiramisu"
            type="Tiramisu"
            cost="$5.50"
          />
          <Dish
            img="https://images.pexels.com/photos/36169157/pexels-photo-36169157.jpeg"
            name="Pistachio Baklava"
            type="Baklava"
            cost="$4.00"
          />
          <Dish
            img="https://images.pexels.com/photos/30391247/pexels-photo-30391247.jpeg"
            name="Lemon Meringue Pie"
            type="Pie"
            cost="$5.00"
          />
          <Dish
            img="https://images.pexels.com/photos/19534496/pexels-photo-19534496.jpeg"
            name="Red Velvet Cake"
            type="Cake"
            cost="$4.50"
          />
          <Dish
            img="https://images.pexels.com/photos/7716556/pexels-photo-7716556.jpeg"
            name="Salted Caramel Brownie"
            type="Brownie"
            cost="$4.50"
          />
          <Dish
            img="https://images.pexels.com/photos/6911838/pexels-photo-6911838.jpeg"
            name="Vanilla Panna Cotta"
            type="Panna Cotta"
            cost="$6.50"
          />
        </div>
      </main>
      <Cart />
    </>
  );
}

export default App;
