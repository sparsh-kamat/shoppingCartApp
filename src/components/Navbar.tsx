import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

const cartOnClick = () => {
    window.location.href = "/cart";
};

const homeOnClick = () => {
    window.location.href = "/";
};

export const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color="primary"
                style={{ backgroundColor: "#ffff" }}
            >
                <Toolbar>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        fontFamily={"Segoe UI"}
                        onClick={homeOnClick}
                        style={{ cursor: "pointer", color: "black" }}
                    >
                        SastaShop
                    </Typography>
                    <IconButton
                        color="secondary"
                        aria-label="add to shopping cart"
                        onClick={cartOnClick}
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
