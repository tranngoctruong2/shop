import {IoMdClose,IoMdRemove}from 'react-icons/io'
import {AiOutlinePlus} from 'react-icons/ai'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
const ProductShop = ({item}) => {
    const {id,title,image,price,amount}=item;
    const{remoCart,congCart,truCart}=useContext(CartContext)
    return ( <>
            <div className=' px-3 border-b-[1px] border-black/40 relative'>
                <div className="w-full min-h-[150px] flex items-center ">
                    <div className=" w-full items-center flex gap-x-4">
                        <img src={image} className="max-w-[70px] object-cover" alt="" />
                            <div className=" font-medium hover:underline">{title}
                            </div>
                         < div className='absolute right-2 top-2' onClick={()=>remoCart(id)}><IoMdClose  className='hover:text-red-500 m-2 '/></div>
                    </div>
                   
                    
                </div>
                <div className='min-w-[200px] mb-2 flex justify-between text-[14px] items-center  '>
                            <div className='flex min-w-[60px] flex-1 justify-between items-center border-[1px] border-black/70  max-w-[100px] font-medium'>
                                <div className='cursor-pointer px-1  ' onClick={()=>truCart(id)}  ><IoMdRemove/></div>
                                <div>{amount}</div>
                                <div className='cursor-pointer px-1' > <AiOutlinePlus onClick={()=>congCart(id)} /></div>
                            </div>
                        
                            <div className=' flex mx-2 flex-1'>$ {price}</div>
                            <div className='flex flex-1 justify-end'>$ {parseFloat(price*amount).toFixed(1)}</div>
                </div>

                            
            </div>
        </> );
}
 
export default ProductShop;