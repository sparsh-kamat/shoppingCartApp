import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {Home} from './pages/Home'
import {Store} from './pages/Store'
import {Cart} from './pages/Cart'
import {Navbar } from './components/Navbar'


const router = (createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/store', element: <Store /> },
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
