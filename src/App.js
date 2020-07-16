import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/Navbar';

function App() {
	return (
		<BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="product" element={<Product />} />
                <Route path="product/:id" element={<ProductItem />} />
                <Route path="*" element={<h2>404 Not Found</h2>}/>
            </Routes>
        </BrowserRouter>
  	);
}

export default App;
