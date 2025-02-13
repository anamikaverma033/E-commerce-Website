import { createContext, useState } from "react";
import {products} from '../assets/Products'
export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = '$';
    const delivery_fee = 40;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);

    const value = {
        products ,currency , delivery_fee,
        search,setSearch,showSearch,setShowSearch,
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
