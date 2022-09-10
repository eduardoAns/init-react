import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink } from "react-router-dom";
import logo from '../logo.svg';
import {routes} from './routes'

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        {
                            routes.map((route) => (
                                <li key={route.to}>
                                    <NavLink to={route.to} className={({isActive})=>isActive?'nav-active':''}>{route.name}</NavLink>
                                </li>
                            ))
                        }

                    </ul>
                
                </nav>

                <Routes>
                    {
                        routes.map(({path, Component}) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))
                    }
                    <Route path="/*" element={<h1>404 Page</h1>} />
                </Routes>


            </div>

        </BrowserRouter>
    </Suspense>
  )
}
