import { Typography, Button, Grid, Paper, Container, Box } from "@mui/material";
import { useCart } from "../hooks/useCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export function Cart() {
  const { cart, total, addToCart, clearCart, removeOneFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20vh",
          height: "100vh",
        }}
      >
        <Typography variant="h4" align="center">
          Your cart is empty
        </Typography>
      </Container>
    );
  }

  // Group items by ID and calculate total count of each item
  const groupedCart = cart.reduce((acc, curr) => {
    acc[curr.id] = acc[curr.id] ? acc[curr.id] + 1 : 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <Grid container justifyContent="center" padding={2} style={{ marginTop: 20 }}>
      {Object.keys(groupedCart).map((id) => {
        const product = cart.find((item) => item.id === parseInt(id))!;
        const count = groupedCart[parseInt(id)];
        const productTotal = product.price * count;
        return (
          <Grid item xs={12} key={id}>
            <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
              <Grid container alignItems="center">
                <Box flexGrow={1}>
                  {/* Image and Title */}
                  <Grid sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: "100%", maxWidth: 50 }}
                    />
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ marginLeft: 10 }}
                    >
                      {product.title}
                    </Typography>
                  </Grid>
                  {/* Count and Buttons */}

                  <Grid container alignItems="center" mt={2}>
                    <Box flex={1}>
                      <Typography variant="body1">
                        Price: ${product.price}
                      </Typography>
                      <Typography variant="body1">
                        Total: ${productTotal}
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button onClick={() => removeOneFromCart(product)}>
                        <RemoveIcon />
                      </Button>
                      <Typography variant="body1" style={{ margin: "0 8px" }}>
                        {count}
                      </Typography>
                      <Button onClick={() => addToCart(product)}>
                        <AddIcon />
                      </Button>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        );
      })}

      <hr style={{ width: "100%" }} />
      <Grid container direction={"column"} item xs={12} mt={2} mb={2}>
        <Typography variant="h6">Total: ${total}</Typography>
        <Button variant="contained" color="primary" onClick={clearCart}>
          Clear Cart
        </Button>
      </Grid>
    </Grid>
  );
}
