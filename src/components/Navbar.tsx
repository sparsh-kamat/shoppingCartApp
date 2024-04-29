import { AppBar } from '@mui/material'; 

//shoppincart icon from material ui
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = () => {
    return (
        <AppBar position="static">
            <h1>Navbar</h1>
            <ShoppingCartIcon />
        </AppBar>
    )
}