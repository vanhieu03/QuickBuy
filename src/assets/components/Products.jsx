
const Products = ({data}) => {
  return (
    <div>
        {data && data.map(item =>
            <div key={item.id}>{item.title}</div>
        )}
    </div>
  )
}

export default Products