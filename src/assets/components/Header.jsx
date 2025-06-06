import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
    return (
        <div>
            {/* Ads */}
            <div className="bg-black">
                <div className="max-w-xl lg:max-w-7xl mx-auto flex items-center justify-center relative text-white ">
                    <div className="px-2 py-2 text-xs md:text-base">
                        <span>Sign up and get 20% off to your first order. </span>
                        <a href="#" className="underline">Sign Up Now</a>
                    </div>
                    <div className="md:block hidden absolute top-0 right-0 translate-y-1/2"><IoClose className="w-5 h-5 cursor-pointer hover:opacity-60" /></div>
                </div>
            </div>
            {/* Main header */}
            <div className='bg-white px-4'>
                <div className="max-w-xl lg:max-w-7xl py-6 mx-auto flex items-center justify-between space-x-3 sm:space-x-15 lg:space-x-30">
                    {/* Logo */}
                    <div className="font-bold text-2xl text-black">LOGO</div>
                    {/* Thanh tìm kiếm */}
                    <div
                        className="flex items-center space-x-2 px-4 py-3 rounded-full bg-[#F2F0F1] flex-1 border-2 border-transparent focus-within:border-black"
                    >
                        <button><IoSearch className="w-5 h-5 text-black opacity-40 active:opacity-60" /></button>
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="outline-0 px-2 w-full"
                        />
                    </div>
                    {/* Cart */}
                    <div className="flex items-center space-x-4">
                        <FiShoppingCart className="w-5 h-5 cursor-pointer" />
                        <FaRegUserCircle className="w-5 h-5 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header