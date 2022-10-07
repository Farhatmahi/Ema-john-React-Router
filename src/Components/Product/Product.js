import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = ({product, handleClick}) => {
    // console.log(props);
    const {img, name, seller, price, ratings} = product
    // const {handleClick} = props;


    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>Product : {name}</p>
            <p className='product-price'>Price : {price}</p>
            <p className='product-seller'>Seller :{seller}</p>
            <p className='product-ratings'>Ratings : {ratings}</p>
            </div>
            <button onClick={() => handleClick(product)} className='button-cart'><p>Add to cart</p><FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;