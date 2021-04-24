import React from "react";
import formatPrice from './helpers/formatPrice'

const Cart = ({ cart, subTotal, tax, total }) => {
  return (
    <section>
      <h2>Cart</h2>
      <ul className="Cart">
        {cart.map(item => {
          const { name, price, id} = item;
          return (
            <li key={id}>
              {name}: {formatPrice(price)}
            </li>
          );
        })}
      </ul>
      <h3>Subtotal: {formatPrice(subTotal)}</h3>
      <h3>Tax: {formatPrice(tax)}</h3>
      <h3>Total: {formatPrice(total)}</h3>
    </section>
  );
};

export default Cart;
