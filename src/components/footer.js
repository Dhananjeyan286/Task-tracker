import React from 'react'
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom"

const Footer = () => {
    const location=useLocation()
    return (
        <footer>
            <p>Copyrights &copy; 2021</p>{/*&copy; refers to the copyright sign */}
            {/* <a href="/about">About</a> */}
            {location.pathname!=="/about" && <Link to="/about" className="btn">About</Link>}
        </footer>
    )
}

export default Footer
