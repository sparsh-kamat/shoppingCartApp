/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material"; // Importing Material-UI components
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Importing the shopping cart icon

import { useCartState, useFetchProducts } from "../components/cartState.jsx";
import { useEffect } from "react";

export default function ProductList() {
  const { cart, addToCart } = useCartState();
  const products = useFetchProducts();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addButtonClick = (product) => {
    addToCart(product);
  };

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
      {products.map((product) => (
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
                  addButtonClick(product);
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
