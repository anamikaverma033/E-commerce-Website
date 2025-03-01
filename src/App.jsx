import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './Components/ScrollToTop'
const App = () => {
  return (
    
      
    <div className='w-full min-h-screen flex flex-col justify-between'>
        <ScrollToTop />
       <ToastContainer />
      <div className='fixed top-0 left-0 w-full h-20 bg-white p-4 z-50 shadow-s items-center'>
        <Navbar/>
      </div>
     <div className='w-full max-w-[1400px] mt-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10'>
      <Searchbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </div>
    <div className='w-full bg-gray-10 text-white text-center py-2 mt-10'>
        <Footer />
      </div>
  </div>
  
  )
}

export default App
