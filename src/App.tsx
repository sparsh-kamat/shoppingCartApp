import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Store} from './pages/Store'
import {Cart} from './pages/Cart'
import {Navbar } from './components/Navbar'


const router = createBrowserRouter([
  { path: '/', element: (
      <div>
        <Navbar />
        <Store />
      </div>
    )
  },
  { path: '/cart', element: (
      <div>
        <Navbar />
        <Cart />
      </div>
    )
  }
]);


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
