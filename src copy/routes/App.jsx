import "../css/App.scss";
import { ButtonAppBar } from "../components/navbar.jsx";
import { useEffect, useState } from "react"; // eslint-disable-line
import  ProductList  from "../components/productList.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";


//themeprovider



// //routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//     errorElement: <ErrorPage />,
//   },
// ]);

// //render




function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={[<ButtonAppBar key="buttonAppBar" />, <ProductList key="productList" />]} />
        <Route path="/cart" element={[<Cart key="cart" />]} />
        

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
