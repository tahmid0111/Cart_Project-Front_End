import React, { useState } from "react";
import { getEmailer, setToken } from "../helper/tokenHelper";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const OTP = () => {
  let url = `https://cart-api.teamrabbil.com/api/verify-login`
  let emaill= getEmailer()
  let navigate = useNavigate()
  const [bodyy, setBodyy] = useState({OTP: ''});

  const handleChange = (e) => {
    setBodyy(bodyy => ({...bodyy, OTP: e.target.value}));
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(emaill)
    console.log(typeof bodyy)

    try {
      let myBody = {
        UserEmail: emaill,
        OTP: bodyy.OTP
      }
      let res = await axios.post(url, myBody);

      let msg = res.data.msg
      let token = res.data.data

      if (msg === "success") {
        setToken(token)

        navigate('/')
      }

    } catch (error) {
      console.log(error)
      navigate('/login')
    }
  };
  return (
    <div className="max-w-sm mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="otp">
            OTP:
          </label>
          <input
            type="number"
            className="form-control w-full bg-gray-100 border rounded-md p-2 focus:border-blue-500 focus:outline-none"
            value={bodyy.OTP}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="btn btn-primary btn-sm bg-blue-500 text-white rounded-md p-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OTP;
