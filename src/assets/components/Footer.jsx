import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import imgVisa from "/visa.svg"
import imgMc from "/mc.svg"
import imgPaypal from "/paypal.svg"
import imgApplePay from "/apple-pay.svg"
import imgGgpay from "/google-pay.svg"
const Footer = () => {
    return (
        <div className="pt-40 max-w-xl lg:max-w-7xl mx-auto px-4">
            <div className="block lg:flex justify-between border-b-1 border-gray-300 pb-10">
                <div className="lg:w-1/6 lg:mb-0 mb-4">
                    <h1 className="text-4xl text-black uppercase font-bold">TECH SHOP</h1>
                    <p className="py-3 text-base">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                    <div className="py-3 flex items-center gap-2">
                        <a href="" className="bg-white rounded-full border-1 border-gray-300">
                            <FaTwitter className="w-8 h-8 p-2" />
                        </a>
                        <a href="" className="bg-black text-white rounded-full border-1 border-gray-300">
                            <RiFacebookFill className="w-8 h-8 p-2" />
                        </a>
                        <a href="" className="bg-white rounded-full border-1 border-gray-300">
                            <FaInstagram className="w-8 h-8 p-2" />
                        </a>
                        <a href="" className="bg-white rounded-full border-1 border-gray-300">
                            <FaGithub className="w-8 h-8 p-2" />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:w-1/2 gap-6">
                    <div>
                        <h3 className="text-lg uppercase font-black pb-3">Company</h3>
                        <div className="flex flex-col gap-4">
                            <a href="#">About</a>
                            <a href="#">Features</a>
                            <a href="#">Works</a>
                            <a href="#">Career</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg uppercase font-black pb-3">Help</h3>
                        <div className="flex flex-col gap-4">
                            <a href="#">Customers Support</a>
                            <a href="#">Delivery Details</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg uppercase font-black pb-3">FAQ</h3>
                        <div className="flex flex-col gap-4">
                            <a href="#">Account</a>
                            <a href="#">Manage Deliveries</a>
                            <a href="#">Orders</a>
                            <a href="#">Payments</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg uppercase font-black pb-3">Resources</h3>
                        <div className="flex flex-col gap-4">
                            <a href="#">Free eBooks</a>
                            <a href="#">Development Tutorial</a>
                            <a href="#">How to - Blog</a>
                            <a href="#">Youtube playlist</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6">
                <div className="flex justify-between mb-10">
                    <p>Tech Shop © 2025, All Rights Reserved</p>
                    <div className="flex">
                        <a href="#">
                            <img src={imgVisa} alt="imgVisa" />
                        </a>
                        <a href="#">
                            <img src={imgMc} alt="imgMc" />
                        </a>
                        <a href="#">
                            <img src={imgPaypal} alt="imgPaypal" />
                        </a>
                        <a href="#">
                            <img src={imgApplePay} alt="imgApplePay" />
                        </a>
                        <a href="#">
                            <img src={imgGgpay} alt="imgGgpay" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer