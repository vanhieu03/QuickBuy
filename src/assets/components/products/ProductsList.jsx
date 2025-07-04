import { Link } from "react-router-dom"; 
import { useProduct } from "../../features/ProductContext"
import Products from "./Products";

const ProductsList = ({ title }) => {
    const { products, loading, reloadProducts } = useProduct();
    if (loading) return <p>Loading products...</p>;
    return (
        <div className="bg-white px-4">
            <div className="max-w-xl lg:max-w-7xl mx-auto py-4">
                <div className="uppercase font-black text-4xl lg:text-5xl text-center py-12">{title}</div>
                {/* Sản phẩm */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {products && Array.from(products).slice(0, 4).map(item =>
                        <div key={item.id} className="">
                            <Products
                                img={item.images[0]}
                                title={item.title}
                                price={item.price}
                                id={item.id}
                            />
                        </div>
                    )}
                </div>
                <div className="text-center py-12">
                    <Link to="/productsall" className="rounded-full px-20 py-4 border-1 border-gray-300 text-base">View All</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductsList