import banner from '/woman.webp'
import { FaPlus } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="bg-[#F2F0F1] px-10">
        <div className="max-w-7xl mx-auto md:flex items-center space-x-2">
            {/* Banner text */}
            <div className="text-black md:w-1/2 md:mt-0 pt-8">
                <h1 className="text-4xl md:text-6xl font-black lg:pr-10 mb-8">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <div className="text-sm md:text-base mb-8">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
                <button className="text-white bg-black rounded-full px-10 py-3 mb-8 md:w-auto w-full">Shop Now</button>
                <ul className="flex items-center md:space-x-8 justify-center md:justify-start">
                    <li>
                        <div className='flex items-center space-x-1 font-bold'>
                            <span className='text-3xl md:text-4xl'>200</span>
                            <FaPlus />
                        </div>
                        <div className='text-sm md:text-base opacity-60'>International Brands</div>
                    </li>
                    <li>
                        <div className='flex items-center space-x-1 font-bold'>
                            <span className='text-3xl md:text-4xl'>2,000</span>
                            <FaPlus />
                        </div>
                        <div className='text-sm md:text-base opacity-60'>International Brands</div>
                    </li>
                    <li>
                        <div className='flex items-center space-x-1 font-bold'>
                            <span className='text-3xl md:text-4xl'>30,000</span>
                            <FaPlus />
                        </div>
                        <div className='text-sm md:text-base opacity-60'>International Brands</div>
                    </li>
                </ul>
            </div>
            {/* Banner img */}
            <div className="md:w-1/2">
                <img src={banner} alt="Banner" />
            </div>
        </div>
    </div>
  )
}

export default Banner