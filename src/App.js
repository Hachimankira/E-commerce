import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route} from 'react-router-dom'
import Product from './modules/Home/Product';
import { useEffect } from 'react';



function App() {
  return (
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    <div >
      <Header />
      <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/products/:id"  element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
