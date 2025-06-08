import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchDetail = async () => {
    try {
      const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setDetail(res.data);
      console.log(res.data)
      setLoading(false)
    }
    catch (er) {
      console.warn(er);
    }
  }
  useEffect(() => {
    fetchDetail();
  }, [id])
  return (
    <div className="pt-[140px] px-4">
      <div className="max-w-xl lg:max-w-7xl mx-auto py-8">
        <div className="flex items-center gap-2 lg:text-lg text-base">
          <Link to="/" className="opacity-60">Home</Link>
          <img className="h-[10px] w-[10px] object-contain opacity-60" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dd5cbafaee315c6c99f4.svg" alt="" />
          <div className="opacity-100">{detail.title}</div>
        </div>
        <div className="py-8">
          {loading ?
            (<div>Đang load</div>) :
            (<div className="text-black">{detail.title}</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default ProductDetail