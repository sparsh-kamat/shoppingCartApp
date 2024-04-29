//implementing a cart page
import { Typography, Button, Grid } from '@mui/material';
import { useCart } from '../hooks/useCart';
import { CartItemType } from '../utilities/types';


export function Cart() {
    const { cart, total, removeFromCart, clearCart, removeOneFromCart } = useCart();
    


    if (cart.length === 0) {
        return (
            <Typography variant="h4" align="center">
                Your cart is empty
            </Typography>
        );
    }

    //make an array of unique items in the cart
        const uniqueCart = Array.from(new Set(cart.map((item) => item.id))).map( (id) => { 
                return cart.find((item) => item.id === id);
                }
        );



        //make a new array of unique items with the count of each item in the cart
        const uniqueCartWithCount = cart.map((item) => {
            return {
                ...item,
                count: cart.filter((cartItem) => cartItem.id === item.id).length,
            };
        });


    return (
        <Grid
            container
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            padding={2}
            spacing={2}
            className="products"
        >
            {uniqueCart.map((product: CartItemType | undefined) => (
                
                <Grid item xs={12} key={product?.id}>
                    {product && (
                        <>
                            <Typography variant="h6">{product.title}</Typography>
                            <Typography variant="body1">Price: ${product.price}</Typography>
                            {/* // find the count of each item in the cart by filtering the cart array */}
                            <Typography variant="body1">Count: {uniqueCartWithCount.find((item) => item.id === product.id)?.count}</Typography>

                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    removeFromCart(product);
                                }}
                            >
                                Remove from cart
                            </Button>
                        </>
                    )}
                </Grid>
            ))}
            <Grid item xs={12}>
                <Typography variant="h6">Total: ${total}</Typography>
                <Button variant="contained" color="primary" onClick={clearCart}>
                    Clear Cart
                </Button>
            </Grid>
        </Grid>
    );
}



