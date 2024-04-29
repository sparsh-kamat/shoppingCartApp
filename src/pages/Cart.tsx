import {
  Typography,
  Button,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from "@mui/material";
import { useCart } from "../hooks/useCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export function Cart() {
  const {
    cart,
    total,
    addToCart,
    removeFromCart,
    clearCart,
    removeOneFromCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <Typography variant="h4" align="center">
        Your cart is empty
      </Typography>
    );
  }

  // Group items by ID and calculate total count of each item
  const groupedCart = cart.reduce((acc, curr) => {
    acc[curr.id] = acc[curr.id] ? acc[curr.id] + 1 : 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <Grid container justifyContent="center" padding={2}>
      <Table>
        <TableHead>
          <TableRow>
            {/* image */}
            <TableCell align="center"></TableCell>
            <TableCell align="center">
              <Typography
                variant="h6"
                fontFamily={"Segoe UI"}
                fontWeight={"bold"}
              >
                Title
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Count</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Price</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Total</Typography>
            </TableCell>
            <TableCell
              align="center"
              // make it less wide
              style={{ width: "5%" }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(groupedCart).map((id) => {
            const product = cart.find((item) => item.id === parseInt(id))!;
            const count = groupedCart[parseInt(id)];
            const productTotal = product.price * count;
            return (
              <TableRow key={id}>
                <TableCell align="center">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: 50 }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{product.title}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Container
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
                  </Container>
                </TableCell>

                <TableCell align="center">
                  <Typography variant="body1">${product.price}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">${productTotal}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={() => removeFromCart(product)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* divider  across the screen */}
      <hr style={{ width: "100%" }} />
      <Grid item xs={12}>
        <Typography variant="h6">Total: ${total}</Typography>
        <Button variant="contained" color="primary" onClick={clearCart}>
          Clear Cart
        </Button>
      </Grid>
    </Grid>
  );
}
