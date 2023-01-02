import {AiOutlineFacebook,AiOutlineTwitter} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
const Footer = () => {
    return ( <div>
        <div className="w-full h-[130px] bg-black/60">
            <div>
                <div className='text-xl font-medium text-center'>
                    <p>shop_w</p>
                </div>
                <div className='flex justify-center items-center gap-10 h-[70px]'>
                    <AiOutlineFacebook className='shadow-xl cursor-pointer rounded-sm bg-slate-100 p-1 hover:scale-105'size={40}/>
                    <AiOutlineTwitter className='shadow-xl cursor-pointer rounded-sm bg-slate-100 p-1 hover:scale-105'size={40}/>
                    <FaTiktok className='shadow-xl cursor-pointer rounded-sm bg-slate-100 p-1 hover:scale-105'size={40}/>
                </div>
                <p className='text-gray-100 text-center text-[12px] m-1 '>Copyright @copy; Ecommerce shop 2022. All right reserved</p>
            </div>
        </div>
    </div> );
}
 
export default Footer;