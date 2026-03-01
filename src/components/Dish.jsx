function Dish(props) {
  return (
    <div className="card-container">
      <img src={props.dish.img} alt={props.dish.name} className="dessert-img" />
      <button className="add-btn">
        <span class="material-symbols-outlined">shopping_cart</span> Add to Cart
      </button>

      <div className="details">
        <p className="dessert-type">{props.dish.type}</p>
        <h4 className="dessert-name">{props.dish.name}</h4>
        <p className="dessert-cost">{props.dish.cost}</p>
      </div>
    </div>
  );
}

export default Dish;
