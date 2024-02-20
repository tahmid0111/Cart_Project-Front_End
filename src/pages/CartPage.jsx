import React, { useState, useEffect } from 'react'
import SingleCart from '../components/CartPage/SingleCart'
import { getToken } from '../helper/tokenHelper'
import Header from '../components/shared/Header'
import axios from 'axios';

const CartPage = () => {
  let url = 'https://cart-api.teamrabbil.com/api/cart-list'
  let config = {
    headers: {
        token: getToken(),
    }
  }

  const [products, setProducts] = useState([])

  async function fetchData() {
    try {
      const response = await axios.get(url, config);
      const data = response.data.data;
      console.log(data)
      setProducts(data);
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [products]);

  return (
    <div>
      <Header />
      <div className='grid grid-cols-12 px-5'>
      {
        products.map((product, i) => <SingleCart key={i} product={product} />)
      }
      </div>
    </div>
  )
}

export default CartPage
