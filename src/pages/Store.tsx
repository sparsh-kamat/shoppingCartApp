import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material"; // Importing Material-UI components
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Importing the shopping cart icon

// Importing the custom hook
import { useCart } from "../hooks/useCart";
import { useFetchProducts } from "../hooks/useFetchProducts";

// Importing the CartItemType type
import { CartItemType } from "../utilities/types";
// return {
//     cart,
//     total,
//     cartCount,
//     addToCart,
//     removeFromCart,
//     clearCart,
//     subtractCount,
//     incrementCount,
//   };


// Creating the Store component
export function Store() {
  // Destructuring the products and loading state from the custom hook
  const { products, loading } = useFetchProducts();

  // Destructuring the cart state and the addToCart function from the custom hook
  const { addToCart } = useCart();

  //Desctructuring the perItemCount state and the incrementCount and subtractCount functions from the custom hook
  
  // If the data is still loading, show a loading message
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // If the data has been loaded, show the products
  return (
    <Grid
      container
      justifyContent="center" // Center the grid container horizontally
      alignContent="center"
      alignItems={"center"}
      padding={2} // Remove padding
      spacing={2}
      className="products"
    >
      {products.map((product: CartItemType) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={product.id}
          //make it center

          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          textAlign={"center"}
          padding={0}
        >
          <Card
            className={"product"}
            sx={{
              backgroundColor: "#fffff",
              pt: 4,
              borderRadius: 0,
              boxShadow: 1,
              margin: 0,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              style={{ objectFit: "contain" }}
              image={product.image}
              alt={product.title}
            />
            <CardContent style={{ paddingTop: 5 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                noWrap
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
            </CardContent>
            <CardContent style={{ padding: 0 }}>
                
              <Button
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                sx={{
                  borderRadius: 0,
                  "&:hover": {
                    color: "#ff5fff",
                  },
                }}
                style={{ padding: 0 }}
                onClick={() => {
                  addToCart(product);
                }}
                startIcon={<ShoppingCartIcon />}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

// Exporting the Store component
export default Store;
