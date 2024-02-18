import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './Components/style.css'

import Index from './Components/Index'
import Products from './Components/Products'
import Cart from './Components/Cart';
import About from './Components/About';
import Order from './Components/Order'
import Privacyr from './Components/privacy'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/privacy" element={<Privacyr />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
