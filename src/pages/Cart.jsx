import React from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <h3>Cart Component</h3>
            <button><Link to="/">Back</Link></button>
        </div>
    )
}

export default Cart
