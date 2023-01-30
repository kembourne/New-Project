import React, { useState } from 'react'
import Form from './Components/Form'
import ProductPage from './Components/ProductPage.js'
import { Category } from '@mui/icons-material'
import CategoryPage from './Components/CategoryPage'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Bottom from './Components/Bottom'
import Form2 from './Components/Form2.js'

import SearchProducts from './Components/SearchProducts'
import Cart from './Components/Cart'
import Home from './Components/Home'
export default function App() {
 
  

  return (
    <div>
<Navbar />
<Routes >
  <Route path="/" element={<Form />} />
  <Route path='home' element={<Home />}/>
  <Route path='category' element={<CategoryPage />} />
  <Route path='product' element={<ProductPage />}/>
<Route path='search' element={<SearchProducts />} />
</Routes>      
<Bottom />
    </div>
  )
}

