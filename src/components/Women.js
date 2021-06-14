import React,{useState,useEffect} from 'react';
import ProductStructure from "./ProductStructure"

const Women = () => {
     const [products, setProduct] = useState([]);
      useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json => {
                setProduct(json);
                console.log(products)
            })
    }, []);
    return (
        <>
            <div className="heading">
                    <h1>Women Products</h1>
                </div>
            <ProductStructure products={products} />
        </>
    )
}

export default Women
