import { SideContext } from "../context/Sidebarcontext";
import { useContext, useState } from "react";
import {GiShoppingCart} from 'react-icons/gi'
import { Link } from "react-router-dom";
import {HiOutlineMenu} from 'react-icons/hi'
import {MdClose}from 'react-icons/md'
import { CartContext } from "../context/CartContext";
const Header = () => {
    const {totalamount}=useContext(CartContext)
    const {side,setSide}=useContext(SideContext)
    const [navbar,setNavbar]=useState(false)
    return (<div>
        <div className="w-full h-[50px] md:h-[80px]  fixed flex justify-between z-20 bg-gray-100 border-b-[1px] border-black/80 px-2 md:px-8 items-center">
            <Link to='/'> <div className=" text-[28px] text-red-500">LoGoShop</div></Link>
            <ul className=" hidden md:flex justify-between items-center px-3  gap-10">
               <li className="hover:text-gray-400 text-[26px] cursor-pointer">Home</li>
               <li className="hover:text-gray-400 text-[26px] cursor-pointer">Product</li>
               <li className="hover:text-gray-400 text-[26px] cursor-pointer ">Cart</li>
               <li className="hover:text-gray-400 text-[26px] cursor-pointer ">Contact</li>
            </ul>
            <div className="flex gap-5 justify-center items-center" >
                <div className="flex justify-center items-center">
                 <GiShoppingCart onClick={()=>setSide(!side) } size={32} className= "cursor-pointer"/>
                 <div className="bg-red-400 min-w-[20px]  rounded-full text-white text-center shadow-md">{totalamount}</div>
                </div>
                
                <div className="md:hidden  ">
                    {navbar? (<MdClose size={32} onClick={()=>setNavbar(!navbar)}/>): (<HiOutlineMenu size={32} onClick={()=>setNavbar(!navbar)}/>)}
                    {navbar&& (
                        <ul className="absolute top-0 left-0 z-20 w-full  h-screen mt-[50px] bg-slate-200 flex flex-col justify-center text-center">
                            <li className="border-b-[1px] border-t-[1px] py-10 border-black/20 text-[20x]">Home</li>
                             <li className="border-b-[1px] py-10 border-black/20 text-[20x]">Product</li>
                            <li className="border-b-[1px] py-10 border-black/20 text-[20x]">Contact</li>
                            <li className="border-b-[1px] py-10 border-black/20 text-[20x]">Cart</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    </div>
          );
}
 
export default Header;