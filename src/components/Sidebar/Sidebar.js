import React from 'react'
import "./Sidebar.css"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__nav">
                <div className="sidebar__navLink">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav__active" : undefined}>Rent</NavLink>
                    <NavLink to="/buy" className={({ isActive }) => isActive ? "nav__active" : undefined}>Buy</NavLink>
                    <NavLink to="/sell" className={({ isActive }) => isActive ? "nav__active" : undefined}>Sell</NavLink>
                    <NavLink to="/manage-property" className={({ isActive }) => isActive ? "nav__active" : undefined}>
                        Manage Property
                    </NavLink>
                    <NavLink to="/resources" className={({ isActive }) => isActive ? "nav__active" : undefined}>
                        Resources
                    </NavLink>
                    <button className="sidebar__login-Button">Login</button>
                    <button className="sidebar__signUp-Button">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar