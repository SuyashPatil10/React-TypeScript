import type { Pizza as PizzaItem } from "../App";
import Pizza from "./Pizza";

type MenuProps = {
  pizzas: PizzaItem[];
};

function Menu({ pizzas }: MenuProps) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.name} pizza={pizza} />;
          })}
        </ul>
      )}
    </main>
  );
}

export default Menu;
