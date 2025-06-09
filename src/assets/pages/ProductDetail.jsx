import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios";
import Products from "../components/products/Products";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const ProductDetail = () => {
  // id sản phẩm lấy trên url
  const { id } = useParams();
  //Biến trạng thái dữ liệu chi tiết sản phẩm thông qua id sản phẩm
  const [detail, setDetail] = useState({});
  //Biến trạng thái dữ liệu những sản phẩm có liên quan
  const [related, setRelated] = useState([]);
  //Biến quản lý hiển thị trạng thái chờ lấy dữ liệu
  const [loading, setLoading] = useState(true);
  // Biến quản lý trạng thái gọi api bị lỗi
  const [error, setError] = useState(false);
  // Biến trạng thái chuyển ảnh
  const [imgIndex, setImgIndex] = useState(0);
  //Biến quản lý xem ảnh
  const [readImg, setReadImg] = useState(0);
  //Biến trạng thái bật tắt fixed khi ấn vào ảnh
  const [turn, setTurn] = useState();
  const fetchDetail = async () => {
    try {
      setLoading(true);
      const [res, res1] = await axios.all(
        [
          axios.get(`https://api.escuelajs.co/api/v1/products/${id}`),
          axios.get(`https://api.escuelajs.co/api/v1/products/${id}/related`)
        ]
      );
      setDetail(res.data);
      setRelated(res1.data)
    }
    catch (er) {
      if (er.response && er.response.status === 404) {
        setError(true);
      } else {
        setError(true);
      }
    }
    finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchDetail();
  }, [id])
  useEffect(() => {
    if (turn) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup để tránh lỗi khi rời trang
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [turn]);
  return (
    <div className="pt-[140px] px-4">
      <div className="max-w-xl lg:max-w-7xl mx-auto py-8">
        {/* Nav */}
        <div className="flex items-center gap-2 lg:text-base text-sm">
          <Link to="/" className="opacity-60">Home</Link>
          <img className="h-[10px] w-[10px] object-contain opacity-60" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dd5cbafaee315c6c99f4.svg" alt="" />
          <div className="opacity-100">{detail.title}</div>
        </div>
        {/* Detail */}
        <div className="pt-8 pb-10 border-b-1 border-gray-300">
          {loading ? (<div>Đang load</div>)
            : error ? (<div>Không tìm thấy sản phẩm</div>)
              : (
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Cột bên trái chưa ảnh */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-3">
                      {/* Các ảnh liên quan đến sản phảm */}
                      <div className="flex items-center justify-between lg:flex-col gap-3 w-full lg:w-1/3 lg:-order-1 order-3">
                        {
                          detail.images.map((item, index) => (
                            <div key={item} className="w-full h-[160px]">
                              <img
                                src={item}
                                alt={item}
                                onClick={() => setImgIndex(index)}
                                className={`w-full h-full object-cover rounded-xl cursor-pointer
                                ${imgIndex === index ? 'border-2 border-black/80' : ''}`
                                }
                              />
                            </div>
                          ))
                        }
                      </div>
                      {/* Ảnh sản phẩm */}
                      <div className="w-full">
                        <img
                          src={detail.images[imgIndex]}
                          alt={detail.images[imgIndex]}
                          className="h-full object-cover rounded-xl cursor-pointer"
                          onClick={() => {
                            setReadImg(imgIndex);
                            setTurn(true);
                          }}
                        />
                      </div>
                    </div>
                    {/* Cột bên phải chứa thông tin sản phẩm */}
                    <div className="text-black">
                      {/* Mô tả sản phẩm */}
                      <div className="border-b-1 border-gray-300">
                        <h3 className="font-black text-4xl">{detail.title}</h3>
                        <div className="font-bold text-3xl py-4">${detail.price}</div>
                        <p className="pb-4 text-base opacity-80">{detail.description}</p>
                      </div>
                      {/* Màu sản phẩm */}
                      <div className="border-b-1 border-gray-300">
                        <div className="py-4 opacity-80 text-lg">Select Colors</div>
                        <div className="flex gap-4 pb-4">
                          <div className="p-5 rounded-full bg-red-700"></div>
                          <div className="p-5 rounded-full bg-green-700"></div>
                          <div className="p-5 rounded-full bg-blue-700"></div>
                        </div>
                      </div>
                      {/* Kích thước*/}
                      <div className="border-b-1 border-gray-300">
                        <div className="py-4 opacity-80 text-lg">Choose size</div>
                        <div className="flex flex-wrap gap-2 lg:gap-4 pb-4">
                          <div className="px-5 lg:px-7 py-3 rounded-full opacity-80 text-base bg-[#F0F0F0]">Small</div>
                          <div className="px-5 lg:px-7 py-3 rounded-full opacity-80 text-base bg-[#F0F0F0]">Medium</div>
                          <div className="px-5 lg:px-7 py-3 rounded-full opacity-80 text-base bg-[#F0F0F0]">Lagre</div>
                          <div className="px-5 lg:px-7 py-3 rounded-full opacity-80 text-base bg-[#F0F0F0]">X-Lagre</div>
                        </div>
                      </div>
                      {/* Thêm vào giỏ hàng */}
                      <div className="flex gap-4 pt-4">
                        <div className="flex items-center space-x-4 px-8 py-3 text-xl bg-[#F0F0F0] rounded-full">
                          <FaMinus className="cursor-pointer" />
                          <input defaultValue="1" type="text" size="1" className="outline-0 w-auto text-center" />
                          <FaPlus className="cursor-pointer" />
                        </div>
                        <button className="w-full bg-black text-white rounded-full cursor-pointer">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                  {/* Phần xem ảnh lớn */}
                  {turn &&
                    <div className="fixed bg-black/10 inset-0 flex items-center justify-center z-50" onMouseDown={() => setTurn(false)}>
                      <div className="bg-white w-1/2 h-2/3 flex gap-4" onMouseDown={e => e.stopPropagation()}>
                        <div className="w-full h-full">
                          <img src={detail.images[readImg]} alt={detail.images[readImg]} className="w-full h-full object-contain" />
                        </div>
                        <div className="w-2/3 pt-10">
                          <h3 className="font-medium text-lg line-clamp-2 pb-6">{detail.title}</h3>
                          <div className="flex flex-wrap gap-4">
                            {
                              detail.images.map((item, index) => (
                                <div key={item} className="w-[80px] h-[80px]">
                                  <img
                                    src={item}
                                    alt={item}
                                    onClick={() => setReadImg(index)}
                                    className={`w-full h-full object-cover rounded-xl cursor-pointer
                                            ${readImg === index ? 'border-2 border-black/80' : ''}`
                                    }
                                  />
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </>
              )
          }
        </div>
        <div className="pt-8">
          <h1 className="font-black text-4xl uppercase text-center">You might also like</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            {Array.from(related).slice(0, 4).map(item =>
              <div key={item.id}>
                <Products
                  img={item.images}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                />
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetail