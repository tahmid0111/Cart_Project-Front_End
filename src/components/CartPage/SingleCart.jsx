import axios from 'axios'
import React from 'react'
import { getToken } from '../../helper/tokenHelper'

const SingleCart = (props) => {
    const {id, title, image} = props.product.product

    let config = {
      headers: {
          token: getToken(),
      }
    }

    const removeCart = async (id)  => {
      let res = await axios.get(`https://cart-api.teamrabbil.com/api/remove-cart/${id}`, config)
      let data = res.data.msg
    } 

  return (
    <div className='col-span-4'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-end">
          <button className='btn btn-secondary' onClick={() => removeCart(id)} >remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCart
