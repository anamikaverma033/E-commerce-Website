import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { FaChevronRight } from "react-icons/fa";
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';
const Collection = () => {
  const {products, search, showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProduct,setFilterProduct] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent');

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategory(prev=> [...prev,e.target.value])
    }
  }
  const togglesubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item=> item !== e.target.value))
    }
    else{
      setSubCategory(prev=> [...prev,e.target.value])
    }
  }
  const applyFilter = ()=>{
    let productCopy = products.slice();

    if(showSearch && search){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    
    if(category.length > 0){
      productCopy = productCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length > 0){
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }
    
      setFilterProduct(productCopy)
  }
  const sortProduct = ()=>{
    let filterCopy = filterProduct.slice();
      switch(sortType){
        case'low-high':
        setFilterProduct(filterCopy.sort((a,b)=> (a.price - b.price)));
        break;
        case'high-low':
        setFilterProduct(filterCopy.sort((a,b)=>(b.price - a.price)));
        break;
        default:
          applyFilter();
          break;
      }
  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])
 
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className=' text-xl flex items-center cursor-pointer gap-1'>FILTERS<FaChevronRight className={`h-4 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`}/>
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox'value={'Men'} onClick={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox'value={'Women'} onClick={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox'value={'Kids'} onClick={toggleCategory}/>Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox'value={'Topwear'} onClick={togglesubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox'value={'Bottomwear'} onClick={togglesubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox'value={'Winterwear'} onClick={togglesubCategory}/>Winterwear  
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        {/* Map Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProduct.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
