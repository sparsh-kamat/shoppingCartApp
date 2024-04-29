//make a cart state that will be used to store the cart items

import { useState, useEffect } from "react";

import { CartItemType } from "../utilities/types";

const CART_STORAGE_KEY = "cartItems";

const useCart = () => {
  // use local storage to store &  retrieve cart items
  const initialCart = JSON.parse(
    localStorage.getItem(CART_STORAGE_KEY) || "[]"
  ) as CartItemType[];
  const [cart, setCart] = useState(initialCart);
  const initialTotal = cart.reduce((acc, item) => acc + item.price, 0);
  const [total, setTotal] = useState(initialTotal);
  const initialCartCount = cart.length;
  const [cartCount, setCartCount] = useState(initialCartCount);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    //update the total and cart count
    setTotal(cart.reduce((acc, item) => acc + item.price, 0));
    setCartCount(cart.length);
  }, [cart]);

  //add to cart function
  const addToCart = (product: CartItemType) => {
    setCart([...cart, product]);
  };

  //remove from cart function
  const removeFromCart = (product: CartItemType) => {
    //count the number of times the product appears in the cart
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  const removeOneFromCart = (product: CartItemType) => {
    // Find the index of the first instance of the product in the cart
    const index = cart.findIndex((item) => item.id === product.id);

    // If the product is found in the cart, remove just one instance
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1); // Remove one instance at the found index
      setCart(newCart);
    }
  };

  //clear cart function
  const clearCart = () => {
    setCart([]);
    setCartCount(0);
    setTotal(0);
  };

  return {
    cart,
    total,
    cartCount,
    addToCart,
    removeFromCart,
    clearCart,
    removeOneFromCart,
  };
};

export { useCart };
