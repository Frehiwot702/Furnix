import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import HomeLayout from './Components/Layout/HomeLayout'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import { useState } from 'react'
import { furniture } from './Store/Data'
import { ProductContext } from './Store/context'

function App() {

  const [products, setProducts] = useState(furniture);

  const router  =  createBrowserRouter(createRoutesFromElements(
      <Route>
        <Route path='' element={<HomeLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/product-detail' element={<ProductDetail/>}/>
        </Route>
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/sign-up' element={<Signup/>} />
      </Route>
    
  ))

  return (
    <ProductContext.Provider value={{products, setProducts}}>
      <RouterProvider router={router}/>
    </ProductContext.Provider>
  )
}

export default App
