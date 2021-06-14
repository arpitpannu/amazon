import React,{useState,useEffect} from 'react';
import ProductStructure from "./ProductStructure"

const Mens = () => {
     const [products, setProduct] = useState([]);
      useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json => {
                setProduct(json);
              
            })
    }, []);
    return (
        <>
            <div className="heading">
                    <h1>Mens Products</h1>
                </div>
            <ProductStructure products={products} />
        </>
    )
}

export default Mens
