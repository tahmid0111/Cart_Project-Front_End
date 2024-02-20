import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getToken, logout } from '../../helper/tokenHelper'

const Header = () => {
  const [login, setLogin] = useState(false)
  useEffect(() =>{
    if(getToken()){
      setLogin(true)
    }else{
      setLogin(false)
    }
  }, [])

  return (
    <div>
      <div className="hidden md:block bg-blue-400 sticky top-0 left-0">
        <div className="header-area px-2 lg:px-10 grid grid-cols-12">
          <div className="col-span-2">
            <h3 className="py-8 xl:py-10 text-black text-2xl font-bold xl:text-center">
              Cart <span className="text-white">Project</span>
            </h3>
          </div>

          <div className="col-span-10">
            <ul className="flex float-right">
              <li className="py-10 px-2 lg:px-5">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                  isActive ? "text-white text-lg font-semibold" : " text-black text-lg font-semibold"
                }
                >
                  Home
                </NavLink>
              </li>

              {login && (
                <li className="py-10 px-2 lg:px-5">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"
                  }
                >
                  Cart List
                </NavLink>
              </li>
              )}

            {login ? (
              <li className="py-10 px-2 lg:px-5">
                <NavLink
                  onClick={() =>{logout()}}
                  className="text-red-500 text-lg font-semibold">
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="py-10 px-2 lg:px-5">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive? "text-white text-lg font-semibold" : "text-black text-lg font-semibold"
                  }
                >
                  Login
                </NavLink>
              </li>
            )}

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
