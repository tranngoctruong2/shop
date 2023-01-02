import bgurl from '../assets/image/shop-hero.jpg'
const Hero = () => {
    return ( <div>
        <div className='h-screen w-full text-gray-200 relative pt-[50px]'>
            <img src={bgurl} alt="" className=' h-screen w-full absolute object-cover  '/>
            <div className='w-full h-screen absolute top-[50px] right-0 bg-gradient-to-r from-black/40'></div>
            <div className="absolute flex flex-col justify-center items-center p-20 h-screen w-full">
                <div className=' text-[32px] text-gray-600 font-medium'>New Trend</div>
                <p className='text-[50px]'>AUTUMN SALE STYLISH <span className=' text-[70px] text-red-700 font-semibold'>Womens</span></p>
                <p className=' rounded-sm shadow-md hover:scale-110 font-extralight cursor-pointer md:text-[24px] bg-slate-400 py-2 px-3'>DISCORE MORE</p>
            </div>
        </div>
    </div> );
}
 
export default Hero ;