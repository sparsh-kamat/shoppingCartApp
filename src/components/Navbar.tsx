import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
        style={{ backgroundColor: "#ffff" }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
              fontFamily={"Segoe UI"}
              style={{ cursor: "pointer", color: "black" }}
            >
              SastaShop
            </Typography>
          </Link>

          <Link to={"/cart"}>
            <IconButton color="secondary" aria-label="add to shopping cart"
             size="large"
             edge="end"
             >
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
