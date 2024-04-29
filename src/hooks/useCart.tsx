//make a cart state that will be used to store the cart items

import { useState } from 'react';

//  {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// }

//set types for the cart
type CartItemType = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
};



const useCart = () => {
    const [cart, setCart] = useState([] as CartItemType[]);
    const [total, setTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    //add to cart function
    const addToCart = (product : CartItemType) => {
        setCart([...cart, product]);
        setCartCount(cartCount + 1);
        setTotal(total + product.price);
    };

    //remove from cart function
    const removeFromCart = (product : CartItemType) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
        setCartCount(cartCount - 1);
        setTotal(total - product.price);
    };

    //clear cart function
    const clearCart = () => {
        setCart([]);
        setCartCount(0);
        setTotal(0);
    };

    return { cart, total, cartCount, addToCart, removeFromCart, clearCart };
}

export { useCart };
