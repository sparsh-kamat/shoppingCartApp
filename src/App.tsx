import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {Store} from './pages/Store'
import {Cart} from './pages/Cart'
import {Navbar } from './components/Navbar'


const router = (createBrowserRouter([
  { path: '/', element: <Store /> },
  { path: '/cart', element: <Cart /> },
]));

function App() {
  return (
    <>
    <Navbar />
    <RouterProvider router={router}/>
    </>
  )
}

export default App
