import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    console.log(products.length)
    return (
        <div>
            <h1>this is orders page {products.length}</h1>
        </div>
    );
};

export default Orders;