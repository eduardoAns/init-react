import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink } from "react-router-dom";
import { LazyPageOne, LazyPageTwo, LazyPage3 } from '../lazyload-01/pages';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={({isActive})=>isActive?'nav-active':''}>lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={({isActive})=>isActive?'nav-active':''}>lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={({isActive})=>isActive?'nav-active':''}>lazy3</NavLink>
                        </li>


                    </ul>
                
                </nav>

                <Routes>
                    <Route path="/lazy1" element={<LazyPageOne />} />
                    <Route path="/lazy2" element={<LazyPageTwo />} />
                    <Route path="/lazy3" element={<LazyPage3 />} />
                    <Route path="/*" element={<h1>404 Page</h1>} />
                </Routes>


            </div>

        </BrowserRouter>
  )
}
