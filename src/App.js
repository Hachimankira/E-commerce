import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route} from 'react-router-dom'
import Product from './modules/Home/Product';
import { useEffect } from 'react';
import INFO from './components/User';
import Products from './modules/Home/Products';
import CategoryProducts from './modules/Home/CategoryProducts';
import Cart from './modules/Home/Cart';




function App() {
  useEffect(() => {
    document.title = `Home | ${INFO.main.title}`; //(``) to create tempalte string in JS
    window.scrollTo(0, 0); //scrolls window to top when their is some changes made in component 
  }, []);
  return (
    <div >
      <Header />
      <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/products/:id"  element={<Product />} />
          <Route path="/products"  element={<Products />} />
          <Route path="/categories/:name" element={<CategoryProducts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*"  element={<div>404 Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
