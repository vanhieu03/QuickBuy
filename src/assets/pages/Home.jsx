import Banner from "../components/Banner"
import Brand from "../components/Brand"
import Header from "../components/Header"
import ProductsList from "../components/ProductsList"

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Brand />
      <ProductsList title="New Arrivals"/>
      <ProductsList title="Top Selling"/>
    </>
  )
}

export default Home