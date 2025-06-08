

const Products = ({img, title, price}) => {
  
  return (
    <>
      {/* Ảnh */}
      <div className="h-72 mb-4">
        <img src={img} alt="" className="w-full h-full rounded-xl object-cover" />
      </div>
      {/* Nội dung */}
      <div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        {/* Đánh giá */}
        <div></div>
        <div className="font-medium text-lg">${price}</div>
      </div>
      
    </>
  )
}

export default Products