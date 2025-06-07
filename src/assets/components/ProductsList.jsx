import { useProduct } from "../features/ProductContext"
import Products from "./Products";

const ProductsList = ({ title }) => {
    const { products, loading, reloadProducts } = useProduct();
    if (loading) return <p>Loading products...</p>;
    return (
        <div className="bg-white border-b-1 border-gray-300">
            <div className="max-w-xl lg:max-w-7xl mx-auto py-4">
                <div className="uppercase font-black text-5xl text-center py-12">{title}</div>
                {/* Sản phẩm */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5">
                    {products && Array.from(products).slice(0, 4).map(item =>
                        <div key={item.id} className="">
                            <Products
                                img={item.images[0]}
                                title={item.title}
                                price={item.price}
                            />
                        </div>
                    )}
                </div>
                <div className="text-center py-12">
                    <a href="#" className="rounded-full px-20 py-4 border-1 border-gray-300 text-base">View All</a>
                </div>
            </div>
        </div>
    )
}

export default ProductsList