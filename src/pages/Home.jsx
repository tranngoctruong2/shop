import { useContext } from "react";
import {ProductPage} from '../context/Productcontext'
import ProductCart from '../components/ProductCart'
import Hero from "../components/Hero";
const Home = () => {
    const {product}= useContext(ProductPage);
    const filtproduct =product?.filter((item)=>{
        return item.category === "men's clothing" || item.category === "women's clothing"
    })

    return (<div>
            <Hero/>
           <div className="p-16 pt-[100px]">
            <div className="flex justify-center items-center">
                <div className="w-20 h-[1px] bg-gray-400 m-2"></div>
                <p className="text-[28px] p-2  text-center text-gray-700 ">Product</p>
                <div className="w-20 h-[1px] bg-gray-400 m-2"></div>
            </div>
          
            <div className="container m-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {filtproduct?.map((product)=>(<ProductCart key={product.id} product={product}/>))

                    }

                </div>

            </div>
           </div>
          
    </div>);
}
 
export default Home;