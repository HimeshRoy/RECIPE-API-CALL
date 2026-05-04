import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import ProductPage from './pages/ProductPage'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='*' element={<PageNotFound/>}/>
          <Route index element={<Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Route>
      </Routes>
  )
}

export default App
