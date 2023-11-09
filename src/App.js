import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from "./Components/Footer/Footer";
import menBanner from './Components/Assets/banner_mens.png'
import womenBaner from './Components/Assets/banner_women.png'
import kidsBanner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={menBanner} category='men'/>} />
          <Route path="/women" element={<ShopCategory banner={womenBaner} category='women'/>} />
          <Route path="/kids" element={<ShopCategory banner={kidsBanner} category='kid'/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
