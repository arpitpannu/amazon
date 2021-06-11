import React from 'react';
import { Link } from "react-router-dom";

const ProductStructure = (props) => {
    
    return (
         <div className="products-container">
                    {
                    props.products.length > 0 && props.products.map(product =>
                        <Link to={`/description${product.id}`} className="product">
                            <div className="productImg">
                                <img src={product.image}alt={product.title} />
                            </div>
                            <h4 className="product-title">{ product.title }</h4>
                            <h6 className="product-description">{product.description}</h6>
                            <div className="product-price-addtoCart">
                                <h4>
                                    <span> ${product.price}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="red" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg></h4>
                                <button>Add To Cart</button>
                            </div>
                        </Link>)
                    }
            </div>
    )
}

export default ProductStructure
