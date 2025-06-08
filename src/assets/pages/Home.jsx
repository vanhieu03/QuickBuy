import Banner from "../components/Banner"
import Brand from "../components/Brand"
import Header from "../components/Header"
import ProductsList from "../components/ProductsList"
import StyleCategoryList from "../components/StyleCategoryList"

const Home = () => {
  return (
    <>
      <Banner />
      <Brand />
      <div className="bg-white">
        <div className="max-w-xl lg:max-w-7xl mx-auto border-b-1 border-gray-300">
          <ProductsList title="New Arrivals" />
        </div>
      </div>
      <ProductsList title="Top Selling" />
      <StyleCategoryList />
      

    </>
  )
}

export default Home