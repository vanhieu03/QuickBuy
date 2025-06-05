import { useState, useEffect } from "react"
import axios from "axios"
import Home from "./assets/pages/Home";
import Banner from "./assets/components/Banner";
import Products from "./assets/components/Products";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
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
    }
    fetchProducts();
  }, [])
  return (
    <>
      <Home />
      <Banner />
      {/* <Products data ={products}/> */}
    </>
  )
}

export default App
