import { getStoredCart } from "../Utilities/fakedb";


export const productsAndCartLoader = async() => {
    //get products
    const productsData = await fetch('products.json')
    const products = await productsData.json();

    //get cart
    const savedCart = getStoredCart();

}