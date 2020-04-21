import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/nav.scss'

 const Navbar = ()=>{
    return(
            <nav className="nav-bar">
                <div className="container">
                    <div className="row">
                        <Link to="/" className="fa fa-star"></Link>
                        <ul className="right">
                        <li><Link to="/" className="fa fa-search"></Link></li>
                        <li><Link to="/cart" className="fa fa-shopping-cart"></Link></li>
                    </ul>
                    </div>
                    
                    
                </div>
            </nav>
   
        
    )
}

export default Navbar;