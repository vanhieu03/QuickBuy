import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import Products from "../components/products/Products";
import RangeSlider from "../features/RangeSlider";
import Paginate from "../features/Paginate";

const ProductsAll = () => {
    //Biến lưu dữ liệu tất cả các sản phẩm
    const [products, setProducts] = useState([]);
    //Biến lưu dữ liệu tất cả các danh mục sản phẩm 
    const [cate, setCate] = useState([]);
    //Biến kiểm tra lấy dữ liệu
    const [loading, setLoading] = useState(true);
    // Biến trạng thái lỗi
    const [error, setError] = useState(false);
    // Biến lưu trạng thái bật/tắt popup
    const [toggleFilter, setToggleFilter] = useState({
        category: false,
        price: false,
        color: false,
        size: false,
        style: false,
    });
    const getProducts = async () => {
        try {
            const [res, res1] = await axios.all(
                [
                    axios.get("https://api.escuelajs.co/api/v1/products", {
                        params: {
                            limit: 100,
                            offset: 0
                        }
                    }),
                    axios.get("https://api.escuelajs.co/api/v1/categories?limit=100")
                ]
            );
            setProducts(res.data);
            setCate(res1.data);
        }
        catch (er) {
            console.log(er)
            setError(true)
        }
        finally {
            setLoading(false);
        }
    }
    //Hàm lấy giá từ RangeSlider
    const getValues = (value) => {
        console.log(value)
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div className="pt-[140px] px-4">
            <div className="max-w-xl lg:max-w-7xl mx-auto py-8">
                {/* Nav */}
                <div className="flex items-center gap-2 lg:text-base text-sm">
                    <Link to="/" className="opacity-60">Home</Link>
                    <img className="h-[10px] w-[10px] object-contain opacity-60" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dd5cbafaee315c6c99f4.svg" alt="" />
                    <div className="opacity-100">Products</div>
                </div>
                {loading ? <div>Đang load</div>
                    : error ? <div>Không tìm thấy sản phẩm</div>
                        : (
                            <>
                                <div className="flex mt-6 gap-6">
                                    {/* filter */}
                                    <div className="w-1/3">
                                        <div className="p-4 border-1 border-gray-300 rounded-2xl">
                                            <div className="pb-4 border-b-1 border-gray-300 font-medium text-base">Filters</div>
                                            <div className="py-4 border-b-1 border-gray-300">
                                                <div
                                                    onClick={() => setToggleFilter(prev => ({ ...prev, category: !prev.category }))}
                                                    className="flex items-center justify-between mb-2 font-medium text-base cursor-pointer">
                                                    Category
                                                    <FaChevronDown />
                                                </div>
                                                {toggleFilter.category &&
                                                    <div className="flex flex-col gap-1 opacity-60">
                                                        {cate.map(item =>
                                                            <div key={item.id} className="cursor-pointer">{item.name}</div>
                                                        )}
                                                    </div>
                                                }

                                            </div>
                                            <div className="py-4 border-b-1 border-gray-300">
                                                <div
                                                    onClick={() => setToggleFilter(prev => ({ ...prev, price: !prev.price }))}
                                                    className="flex items-center justify-between mb-2 font-medium text-base cursor-pointer">
                                                    Price
                                                    <FaChevronDown />
                                                </div>
                                                {toggleFilter.price &&
                                                    <div className="pt-4 pb-6 px-3">
                                                        <RangeSlider
                                                            onValuesChange={getValues}
                                                        />
                                                    </div>
                                                }
                                            </div>
                                            <div className="py-4 border-b-1 border-gray-300">
                                                <div
                                                    onClick={() => setToggleFilter(prev => ({ ...prev, color: !prev.color }))}
                                                    className="flex items-center justify-between mb-2 font-medium text-base cursor-pointer">
                                                    Color
                                                    <FaChevronDown />
                                                </div>
                                                {toggleFilter.color &&
                                                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 py-4">
                                                        {["bg-green-600", "bg-red-600", "bg-yellow-600", "bg-orange-600", "bg-blue-600", "bg-blue-800", "bg-purple-600", "bg-pink-600", "bg-[#eee]", "bg-black"]
                                                            .map((color, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={`w-9 h-9 rounded-full ${color}`}
                                                                />
                                                            ))}
                                                    </div>
                                                }

                                            </div>
                                            <div className="py-4 border-b-1 border-gray-300">
                                                <div
                                                    onClick={() => setToggleFilter(prev => ({ ...prev, size: !prev.size }))}
                                                    className="flex items-center justify-between mb-2 font-medium text-base cursor-pointer">
                                                    Size
                                                    <FaChevronDown />
                                                </div>
                                                {toggleFilter.size &&
                                                    < div className="grid grid-cols-2 gap-4 py-6">
                                                        {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]
                                                            .map((size) => (
                                                                <div
                                                                    key={size}
                                                                    className="px-5 lg:px-6 py-3 rounded-full opacity-80 text-base bg-[#F0F0F0] text-center"
                                                                >
                                                                    {size}
                                                                </div>
                                                            ))}
                                                    </div>
                                                }
                                            </div>
                                            <div className="pt-4">
                                                <div
                                                    onClick={() => setToggleFilter(prev => ({ ...prev, style: !prev.style }))}
                                                    className="flex items-center justify-between font-medium text-base cursor-pointer">
                                                    Dress Style
                                                    <FaChevronDown />
                                                </div>
                                                {toggleFilter.style &&
                                                    <div className="py-4 grid grid-cols-1 gap-2 opacity-60">
                                                        <div>Casual</div>
                                                        <div>Formal</div>
                                                        <div>Party</div>
                                                        <div>Gym</div>
                                                    </div>
                                                }
                                                <div className="px-6 py-3 bg-black text-center text-white rounded-full mt-4">Apply Filter</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Result */}
                                    <div className="w-full">
                                        <div className="uppercase font-bold text-4xl pb-2">PRODUCTS</div>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                            {
                                                products.map(item =>
                                                    <div key={item.id}>
                                                        <Products
                                                            img={item.images[0]}
                                                            title={item.title}
                                                            price={item.price}
                                                            id={item.id}
                                                        />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Paginate />
                                </div>
                            </>
                        )
                }
            </div>
        </div >
    )
}

export default ProductsAll