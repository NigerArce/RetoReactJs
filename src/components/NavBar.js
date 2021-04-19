import React from "react"
import '../assets/css/App.css';
import { Link } from "react-router-dom"

const NavBar =() => {
    const navStyle = {
        color: 'white'
    };

    return (
    
    <nav>
        <ul className="nav-links">
            <Link style={navStyle} to="/cliente"><li>Cliente</li></Link>
            <Link style={navStyle} to="/desviacion"><li>Desviacion</li></Link>
        </ul>
    </nav>
    )
}

export default NavBar;