import React, { useState } from "react";
import axios from "axios";
import { setEmailer } from "../helper/tokenHelper";
import { useNavigate } from "react-router-dom";
import Header from "../components/shared/Header";

const Login = () => {
  let url = `https://cart-api.teamrabbil.com/api/user-login`
  let navigate = useNavigate()
  const [email, setEmail] = useState({UserEmail: ''})

  const handleChange = (e) => {
    setEmail(email => ({...email, UserEmail: e.target.value}));
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    // console.log(email)
    try {
        let res = await axios.post(url, email);
        let msg = res.data.msg

        if (msg === "success") {
          let Email = email.UserEmail
          setEmailer(Email)
          // console.log(Email)
          navigate('/otp')
        } else {
          console.log('something went wrong')
        }

    } catch (error) {
        console.log('error')
    }

    setEmail({UserEmail: ''})
  };
  return (
    <div>
      <Header />
          <div className="max-w-sm mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            className="form-control w-full bg-gray-100 border rounded-md p-2 focus:border-blue-500 focus:outline-none"
            value={email.UserEmail}
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
    </div>
  );
};

export default Login;

