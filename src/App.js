import React from "react";
import Cart from "./Cart";
import Products from "./Products";
import Checkout from "./Checkout";
import "./App.css"
//import products from "./data/productData"

class App extends React.Component {
  state = { cart: [] };

  addProduct = (product) => {
    this.setState((prevState) => {
      return { cart: [product, ...prevState.cart] };
    });
  };

  render() {
    const { cart } = this.state;
    let subTotal = cart.reduce((sum, product) => sum + product.price, 0);
    let tax = (5 / 100) * subTotal;
    let total = subTotal + tax;

    return (
      <div>
        <Products addProduct = {this.addProduct} />
        <Cart cart = {cart} subTotal = {subTotal || 0} tax = {tax} total = {total} />
        <Checkout  total={total}/>
      </div>
    );
  }
}

export default App;
