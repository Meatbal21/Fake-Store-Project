import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Contact from './pages/Contact/Contact'
import CheckOut from './pages/CheckOut/CheckOut'
import CartContextProvider from './context/CartContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <CartContextProvider >

     <Header />

     <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/details/:productId' element={<ProductDetail />} />
        <Route path='/Contact' element={<Contact />} />
     </Routes>
     
     <Footer />

    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
