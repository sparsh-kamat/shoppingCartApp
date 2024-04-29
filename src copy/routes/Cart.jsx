import '../css/Cart.scss';
import {ButtonAppBar} from '../components/navbar.jsx';
import { useCartState } from "../components/cartState.jsx";
import { useEffect } from "react";
//take props CartItems
// eslint-disable-next-line react/prop-types



function Cart(  ) {
  const { cart, addToCart } = useCartState();
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  
  
  return (
    <>
      <ButtonAppBar />
      <div className="cart">
        <h1>Cart</h1>
        <p>Items in your cart will appear here</p>

        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
              </div>
            </div>
          ))}

          {cart.length === 0 && <p>Your cart is empty</p>}
        </div>

      </div>
    </>
  )
}

export default Cart
