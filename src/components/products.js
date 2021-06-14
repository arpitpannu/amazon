import React,{useState,useEffect} from 'react';
import ProductStructure from "./ProductStructure"

const Products = () => {
     const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {
                setProduct(json);
                console.log(products)
            })
    }, []);
    return (
        <>
            <div className="heading">
                    <h1>All Products</h1>
                </div>
                <ProductStructure products={products} />
            </>
    )
}
export default Products;
