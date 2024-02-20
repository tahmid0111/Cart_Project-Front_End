import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import OTP from '../pages/OTP'
import Login from '../pages/Login'
import CartPage from '../pages/CartPage'
import { getToken } from '../helper/tokenHelper'


const Router = () => {
  
  if(getToken()) {

    return (
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/cart' element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }else {

    return (
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/otp' element={<OTP />} />
          </Routes>
        </BrowserRouter>
      </div>
    )



  }

}

export default Router
