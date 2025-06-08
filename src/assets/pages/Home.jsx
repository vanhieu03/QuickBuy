import Banner from "../components/Banner"
import Brand from "../components/Brand"
import Header from "../components/Header"
import ProductsList from "../components/ProductsList"
import StyleCategoryList from "../components/StyleCategoryList"
import Subscribe from "../components/Subscribe"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Brand />
      <div className="bg-white">
        <div className="max-w-xl lg:max-w-7xl mx-auto border-b-1 border-gray-300">
          <ProductsList title="New Arrivals" />
        </div>
      </div>
      <ProductsList title="Top Selling" />
      <StyleCategoryList />
      <div className="relative bg-[#F0F0F0] lg:mt-30 mt-50">
        <div className="absolute bottom-full translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
          <Subscribe />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Home