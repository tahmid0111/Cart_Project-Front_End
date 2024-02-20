import React from 'react'
import { getToken } from '../../helper/tokenHelper'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Singleproduct = (props) => {
  let navigate = useNavigate()
    let url = 'https://cart-api.teamrabbil.com/api/create-cart'
    let config = {
      headers: {
          token: getToken(),
      }
    }
    const {id, title, image } = props.product

    const handleAdd = (id) => {
      if (getToken()) {
        let res = axios.get(`${url}/${id}`, config)
        let data = res.data
      } else {
        navigate('/login')
        alert('please login before adding a product')
      }
    }

  return (
    <div className='col-span-4'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-end">
          <button onClick={() => handleAdd(id)} className='btn btn-secondary' >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singleproduct
