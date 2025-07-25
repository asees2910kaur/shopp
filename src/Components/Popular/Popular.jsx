import React from 'react'
import Item from '../Item/Item';
import data_product from '../Assets/data';
import "./Popular.css"

const Popular = () => {
  return (
    <div className='Popular'>
       <h1>POPULAR IN WOMEN</h1>
    <hr/>
      <div className="popular-items">
        {data_product.map((item,i)=>{

        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular;