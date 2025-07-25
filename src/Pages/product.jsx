import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContextProvider';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { RelatedProduct } from '../Components/RelatedProducts/RelatedProduct';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProduct/>
    </div>
  )
}
