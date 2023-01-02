import {AiOutlinePlus} from 'react-icons/ai'
import {IoEyeSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
const ProductCart = ({product}) => {
   const {id,image,title,category} =product
    const {addToCart}= useContext(CartContext)
    return ( <div>
        <div className="w-full h-[300px] border border-black/20 relative p-6 group ">
            <div className="w-full h-[200px] flex justify-center items-center">
                <img src={image} className='object-cover max-h-[170px] group-hover:scale-110' alt="" />
              
             </div>
             <div className="absolute top-0 right-0 shadow rounded group-hover:right-3 translate-all duration-500 flex justify-center items-center p-1 opacity-0 group-hover:opacity-100">
            <button onClick={()=>addToCart(product,id)} className="text-gray-300 bg-red-300 hover:scale-110 hover:bg-red-500 rounded p-1 mr-1 "><AiOutlinePlus size={22}/></button>
              <Link to= {`/product/${id}`}><IoEyeSharp size={22}/></Link>  
            </div>
           
        </div>
        <div>
                <p className='text-gray-300 text-[16px] my-1'> {category}</p>
                <Link to={`/product/${id}`} className="hover:text-red-500 font-medium text-center"><p>{title}</p></Link>
            </div> 
       
    </div> );
}
 
export default ProductCart;