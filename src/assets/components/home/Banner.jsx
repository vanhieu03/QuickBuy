import { Link } from 'react-router-dom';
import banner from '/woman.webp'
import { FaPlus } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="bg-[#F2F0F1] px-4 pt-[140px]">
            <div className="max-w-xl lg:max-w-7xl mx-auto lg:flex items-center space-x-2">
                {/* Banner text */}
                <div className="text-black lg:w-1/2 lg:mt-0 pt-4">
                    <h1 className="text-4xl lg:text-6xl font-black lg:pr-10 pr-4 mb-8">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <div className="text-sm lg:text-base mb-8">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
                    <button className="text-white bg-black rounded-full px-10 py-3 mb-8 lg:w-auto w-full">
                        <Link to="/productsall">Shop Now</Link>
                    </button>
                    <ul className="flex flex-wrap items-center justify-center lg:justify-start pb-4">
                        <li className='border-r-1 border-gray-300 pr-4'>
                            <div className='flex items-center space-x-1 font-bold'>
                                <span className='text-4xl'>200</span>
                                <FaPlus />
                            </div>
                            <div className='text-sm sm:text-base opacity-60'>International Brands</div>
                        </li>
                        <li className='sm:border-r-1 sm:border-gray-300 pl-4 sm:pr-4 sm:mb-0 mb-2'>
                            <div className='flex items-center space-x-1 font-bold'>
                                <span className='text-4xl'>2,000</span>
                                <FaPlus />
                            </div>
                            <div className='text-sm lg:text-base opacity-60'>International Brands</div>
                        </li>
                        <li className='pl-4'>
                            <div className='flex items-center space-x-1 font-bold'>
                                <span className='text-4xl'>30,000</span>
                                <FaPlus />
                            </div>
                            <div className='text-sm lg:text-base opacity-60'>International Brands</div>
                        </li>
                    </ul>
                </div>
                {/* Banner img */}
                <div className="lg:w-1/2 lg:mt-0 mt-4">
                    <img src={banner} alt="Banner" />
                </div>
            </div>
        </div>
    )
}

export default Banner