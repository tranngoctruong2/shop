import { createContext } from "react";
import { useEffect, useState} from "react";
export const ProductPage =createContext();
 const ProductProvider =({children})=>{
    const [product,setProduct]=useState();
    useEffect(()=>{
       const fetchdata= async ()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json()
        setProduct(data)
        
       }
       fetchdata()
    },[])
    return <ProductPage.Provider value={{product}}>{children}</ProductPage.Provider>
}
export default ProductProvider;