import {createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

//Component tạo Context để truyền dữ liệu khi gọi api đi toàn trang
//Tạo context
const ProductContext  = createContext();

// Tạo Provider Components
export const ProductProvider = ({children}) =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    //Gọi API lấy dữ liệu
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://api.escuelajs.co/api/v1/products',{
          params:{
            limit: 10,
            offset: 0
          }
        });
        setProducts(res.data);
        console.log(res.data);
      }
      catch (er) {
        console.error(er);
      }
      setLoading(false);
    }
    //Gọi một lần sau khi render
    useEffect(() =>{
        fetchProducts();
    }, [])
    //Cung cấp giá trị cho Context
    const value = {
        products,
        loading,
        reloadProducts: fetchProducts
    }
    
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

// Custom hook dùng để lấy context dễ hơn
export const useProduct = () => useContext(ProductContext);