function Dish(props) {
  return (
    <div className="card-container">
   
        <img src={props.img} alt={props.name} className="dessert-img" />
        <button className="add-btn"><span class="material-symbols-outlined">
shopping_cart
</span> Add to Cart</button>
     
      <div className="details">
        <p className="dessert-type">{props.type}</p>
        <h4 className="dessert-name">{props.name}</h4>
        <p className="dessert-cost">{props.cost}</p>
      </div>
    </div>
  );
}

export default Dish;
