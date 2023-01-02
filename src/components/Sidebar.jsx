
import {AiOutlineLeft} from 'react-icons/ai'
import {FiTrash2} from 'react-icons/fi'
import { SideContext } from "../context/Sidebarcontext";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductShop from "./ProductShop";
const Sidebar = () => {
    const {side,handleside}=useContext(SideContext)
    const {cart,clearCart,total,totalamount}=useContext(CartContext) 
    return ( 
        <>
            <div className={`${side? 'fixed':'hidden'} w-full  md:max-w-[250px] lg:max-w-[300px] bg-slate-100 z-30 border-r-[1px] border-gray-700 top-0 left-0 h-screen overflow-y-hidden translate-all duration-300`}>
            <div className=''>
                <div className=" flex justify-between items-center m-4">
                    <AiOutlineLeft className='cursor-pointer' size={22} onClick={handleside}/>
                    <div className="text-xl font-semibold">Shop Bag <span className='bg-red-400 rounded-full px-2 py-0 font-normal shadow-md'>{totalamount}</span> </div>
                   
                </div>
                <div className='h-[300px] md:h-[380px] overflow-y-auto'>
                    {cart?.map((cart)=>(
                        <ProductShop item={cart} key={cart.id} />
                    ))}
                </div>

             </div>
             <div className="flex justify-between item-center p-2">
                    <div className="my-auto mr-2"><span>Total:</span>{parseFloat(total).toFixed(1)} $</div>
                    <div onClick={clearCart} className="text-white rounded-sm shadow-sm bg-red-600 w-12 h-12 flex items-center justify-center">
                    <FiTrash2 size={22} className=" cursor-pointer  "/>
                    </div>
                </div>
                <div className='bg-gray-300 w-full text-center py-2 text-[12px] cursor-pointer font-medium'>View To Cart</div>
                <div onClick={()=>clearCart} className='bg-black/50 text-white w-full text-center py-2 text-[12px] cursor-pointer font-medium mt-2'>Checkout</div>     
            </div>
        </>
     );
}
 
export default Sidebar;