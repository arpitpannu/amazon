import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ProductDescription = () => {
    const { id } = useParams();
    const i = parseInt(id);
    const [product, setProduct] = useState([]);
     useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${i}`)
            .then(res=>res.json())
            .then(json => {
                setProduct(json);
                console.log("product",product)
            })
    }, []);
    return (
        <>
            {product && <div className="produt-description">
                <div className="produt-description-img">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="produt-description-content">
                    <h3 >{product.title}</h3>
                    <h5>{product.description}</h5>
                    <div className="produt-description-add">
                        <h5>${product.price}</h5>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>}
            </>
    )
}

export default ProductDescription
