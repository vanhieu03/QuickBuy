import {Routes, Route} from "react-router-dom"
import Header from "./assets/components/home/Header";
import Home from "./assets/pages/Home";
import Subscribe from "./assets/components/home/Subscribe"
import Footer from "./assets/components/home/Footer"
import ProductDetail from "./assets/pages/ProductDetail";
import ScrollToTop from "./assets/features/ScrollToTop";

function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/productdetail/:id" element={<ProductDetail />}/>
      </Routes>
      {/* Footer */}
      <div className="relative bg-[#F0F0F0] lg:mt-30 mt-50">
        <div className="absolute bottom-full translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
          <Subscribe />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
