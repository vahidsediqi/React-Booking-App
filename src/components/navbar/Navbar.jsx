import './navbar.css'
import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <span className="logo">VS Booking App</span>
                <div className="navItems">
                    <button className="navbarButton">Register</button>
                    <button className="navbarButton">Login</button>
                </div>
            </div>
        </div>
    )
}
