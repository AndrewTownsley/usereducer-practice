import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    

    return (
        <div>
            <h1>Store Logo</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart{}</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
