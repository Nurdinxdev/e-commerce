import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <div className='max-w-screen min-h-screen'>
        <Navbar />
        <Hero />
        <Products />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default App;
