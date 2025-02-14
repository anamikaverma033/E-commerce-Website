import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller))
        setBestSeller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Our Best Sellers are loved by thousands for a reason!
             Whether you’re looking for the latest fashion, top-rated electronics,
              or must-have home essentials, we’ve got you covered. These products are tried, tested,
               and highly rated by happy customers.Don't miss out—shop your favorites today!
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
              bestSeller.map((item,index)=>(
                  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
              ))
            }
        </div>
    </div>
  )
}

export default BestSeller
