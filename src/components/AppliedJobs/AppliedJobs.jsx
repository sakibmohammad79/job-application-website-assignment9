import React from 'react';
import { getShoppingCart } from '../../utility';

const AppliedJobs = () => {
   const cartData = getShoppingCart();
   console.log(cartData);
    return (
        <div>
            <h2>Cart:</h2>
        </div>
    );
};

export default AppliedJobs;