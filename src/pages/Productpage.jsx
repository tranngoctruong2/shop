import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductPage } from "../context/Productcontext";
import { CartContext } from "../context/CartContext";
const Productpage = () => {
    const {addToCart} =useContext(CartContext)
    const {id}=useParams()
    console.log(id)
    const {product} =useContext(ProductPage)
    const newProduct =product.find((product)=>{
        return product.id === parseInt(id)
    })
    const {image,title,description,price}=newProduct
  
    return ( <div>
            <div className="w-full md:h-screen pt-32 pb-12 lg:py-32 flex flex-col justify-center items-center md:flex-row">
                   
                <img src={image} className="object-cover max-w-[110px] md:max-w-[280px]" alt="" />
                
                <div className=" flex justify-center items-center flex-col ">
                    <p className="font-medium text-blue-300 text-sm underline">
                        {price} $
                    </p>
                    <p className="font-medium p-2 text-[24px] md:p-2">{title}</p>
                    <p className="text-[16px] md:p-10">{description}</p>
                    <button onClick={()=>addToCart(newProduct,newProduct.id)} className="bg-black/70 hover:scale-105 rounded-md shadow-md px-8 py-4 text-white">ADD TO CART</button>
                </div>
             
            </div>
        </div>)
}
 
export default Productpage;