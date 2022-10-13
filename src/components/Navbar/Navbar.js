import React from 'react'
import "./Navbar.css"
import { NavLink, Link } from "react-router-dom"
import { HiMailOpen } from "react-icons/hi"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { RiArrowDropDownLine } from "react-icons/ri"
import Sidebar from '../Sidebar/Sidebar'


const Navbar = () => {
    const [openSidebar, setOpenSidebar] = React.useState(false)
    const handleOpenSidebar = () => setOpenSidebar(!openSidebar)
    const handleCloseSidebar = () => setOpenSidebar(false)

   

    return (
        <div className="navbar">

            <div className="navbar__left">
                <Link to="/" >
                    <div className="navbar__logo">
                        <HiMailOpen size={28} color="#6050DC" />
                        <span>Estaery</span>
                    </div>
                </Link>

                <nav className="navbar__nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav__active" : undefined}>Rent</NavLink>
                    <NavLink to="/buy" className={({ isActive }) => isActive ? "nav__active" : undefined}>Buy</NavLink>
                    <NavLink to="/sell" className={({ isActive }) => isActive ? "nav__active" : undefined}>Sell</NavLink>
                    <NavLink to="/manage-property" className={({ isActive }) => isActive ? "nav__active" : undefined}>
                        <div className="navbar__navContainer">
                            <span>Manage Property</span>
                            <RiArrowDropDownLine size={28} />
                        </div>
                    </NavLink>
                    <NavLink to="/resources" className={({ isActive }) => isActive ? "nav__active" : undefined}>
                        <div className="navbar__navContainer">
                            <span>Resources</span>
                            <RiArrowDropDownLine size={28} />
                        </div>
                    </NavLink>
                </nav>


            </div>


            <div className="navbar__right">
                <button className="navbar__login-Button">Login</button>
                <button className="navbar__signUp-Button">Sign up</button>

                {
                    openSidebar ? (
                        <AiOutlineClose onClick={handleCloseSidebar} size={32} className="navbar__menuClose" />
                    ) : (
                        <AiOutlineMenu onClick={handleOpenSidebar} size={32} className="navbar__menu" />
                    )
                }
            </div>

            {
                openSidebar && (
                    <Sidebar />
                )
            }
        </div>
    )
}

export default Navbar