import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink } from "react-router-dom";
import logo from '../logo.svg';

export const Navigation = () => {
  return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive})=>isActive?'nav-active':''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive})=>isActive?'nav-active':''}>about</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({isActive})=>isActive?'nav-active':''}>User</NavLink>
                        </li>


                    </ul>
                
                </nav>

                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>} />
                    <Route path="/about" element={<h1>about Page</h1>} />
                    <Route path="/users" element={<h1>users Page</h1>} />
                    <Route path="/*" element={<h1>404 Page</h1>} />
                </Routes>


            </div>

        </BrowserRouter>
  )
}
