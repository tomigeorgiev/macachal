import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './Components/style.css'

import Index from './Components/Index'
import Products from './Components/Products'
import Cart from './Components/Cart';
import About from './Components/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <div className='bot'>
        <a href='/cart'>
        <i class="fa-solid fa-basket-shopping"></i>
        </a>
    </div>
    </>
  );
}

export default App;
