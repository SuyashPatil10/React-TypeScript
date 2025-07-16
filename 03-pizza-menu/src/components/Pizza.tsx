import type { Pizza as PizzaItem } from "../App";

type PizzaProps = {
  pizza: PizzaItem;
};

function Pizza({ pizza }: PizzaProps) {
  return (
    <li className={`pizza ${pizza.soldOut && "sold-out"}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SoldOut" : pizza.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
