import React, { useEffect, useState } from 'react'
import Singleproduct from './Singleproduct'
import { getToken } from '../../helper/tokenHelper'
import axios from 'axios'

const ProductList = () => {
    let url = `https://cart-api.teamrabbil.com/api/product-list`
    let config = {
      headers: {
          token: getToken(),
      }
    }

    const [products, setProducts] = useState([])

    const fetchData = async() => {
      let res = await axios.get(url)
      let data = res.data.data
      setProducts(data)
    }

    useEffect(() =>{
        fetchData()
    }, [])
    
  return (
    <div className='grid grid-cols-12'>
      {
        products.map((product, i) => <Singleproduct key={i} product={product} />)
      }
    </div>
  )
}

export default ProductList
