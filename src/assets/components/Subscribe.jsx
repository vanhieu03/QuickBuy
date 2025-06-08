import { MdOutlineMail } from "react-icons/md";

const Subscribe = () => {
    return (
        <div className="px-4">
            <div className="bg-black rounded-xl max-w-xl lg:max-w-7xl mx-auto">
                <div className="p-4 md:p-10 block lg:flex justify-between">
                    <div className="uppercase text-white font-bold text-4xl lg:w-1/2 lg:mb-0 mb-4">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
                    <div className="lg:w-1/3">
                        <div className="bg-white text-black flex items-center rounded-full w-full py-3 mb-3">
                            <label htmlFor="footer-email"><MdOutlineMail className="w-5 h-5 mx-4"/></label>
                            <input
                                id="footer-email"
                                type="text"
                                placeholder="Enter your email address"
                                className="outline-0" />
                        </div>
                        <button className="bg-white text-black py-3 rounded-full cursor-pointer text-base w-full">Subscribe to Newsletter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe