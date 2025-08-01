import React from 'react';
import "../RelatedProducts/RelatedProduct.css";
import data_product from '../Assets/data';
import Item from '../Item/Item';

export const RelatedProduct = () => {
  return (
    <div className="RelatedProduct">
        <h1>Related Products</h1>
        <hr/>
        <div className="RelatedProduct-item">
            {data_product.map((item,i)=>{
                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
