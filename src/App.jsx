import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartShop from "./pages/CartShop";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/cart' element={<CartShop />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
