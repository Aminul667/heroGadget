import React from 'react';
import { getStoredCart } from '../utils/fakeDb';

const Cart = () => {
    const cart = getStoredCart()
    console.log(cart);

    return (
        <div>
            <h2>Cart Component</h2>
        </div>
    );
};

export default Cart;