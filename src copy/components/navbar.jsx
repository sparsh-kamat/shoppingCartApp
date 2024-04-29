import { useEffect,useState } from "react"; // eslint-disable-line
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";






function cartOnClick() {
    window.location.href = "/cart";
}

function homeOnClick() {
    window.location.href = "/";
}

  
export default function ButtonAppBar() {
    //make a theme provider    


return (
    <Box sx={{ flexGrow: 1 }}>
        {/* //color="#efcece" is the background color of the navbar */}
        <AppBar position="static" color="primary" style={{backgroundColor: "#ffff"}}>
            <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} fontFamily={"Segoe UI"} onClick={homeOnClick} style={{cursor: "pointer", color: "black"}}>
                    SastaShop
                </Typography>
                <ShoppingCartIcon
                    onClick={cartOnClick}
                    size="large"
                    edge="start"
                    color="primary"
                    //on hover effect, color changes to white
                    sx={{

                        "&:hover": {
                            color: "#ff5fff"
                        }
                    }}
                    aria-label="menu"
                />
            </Toolbar>
        </AppBar>
    </Box>
);
}

export { ButtonAppBar };
