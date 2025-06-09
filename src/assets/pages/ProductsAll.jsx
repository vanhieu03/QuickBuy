import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import Products from "../components/products/Products";

const ProductsAll = () => {
    //Biến lưu dữ liệu tất cả các sản phẩm
    const [products, setProducts] = useState([]);
    //Biến lưu dữ liệu tất cả các danh mục sản phẩm 
    const [cate, setCate] = useState([]);
    //Biến kiểm tra lấy dữ liệu
    const [loading, setLoading] = useState(true);
    // Biến trạng thái lỗi
    const [error, setError] = useState(false);
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
                                    <div className="w-1/3 border-1 border-gray-300 rounded-2xl">
                                        <div className="p-4">
                                            <div className="pb-4 border-b-1 border-gray-300 font-medium text-base">Filters</div>
                                            <div className="py-4 border-b-1 border-gray-300">
                                                <div className="mb-2 font-medium text-base">Category</div>
                                                <div className="flex flex-col gap-1">
                                                    {cate.map(item =>
                                                        <div key={item.id}>{item.name}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="py-4 border-b-1 border-gray-300">
                                                <div className="font-medium text-base">Price</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
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
                            </>
                        )
                }
            </div>
        </div>
    )
}

export default ProductsAll