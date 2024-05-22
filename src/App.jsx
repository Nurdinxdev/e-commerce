import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CartShop from "./pages/CartShop";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/cart' element={<CartShop />} />
      </Route>
    </Routes>
  );
};

export default App;
