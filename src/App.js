import { Routes, Route } from 'react-router-dom'

import Home from './routes/index/home.component';
import Projects from './routes/projects/projects.component';
import Monsters from './routes/projects/monsters-rolodex/monsters-rolodex.component';
import Shop from './routes/projects/shop/index/shop.component';
import Authentication from './routes/navigation/authentication/authentication.component';
import Navbar from './routes/navigation/navbar/navbar.component';
import HatsPage from './routes/projects/shop/products/hats.component';
import CartPage from './routes/projects/shop/checkout/cart.component';
import MensPage from './routes/projects/shop/products/mens.component';
import WomensPage from './routes/projects/shop/products/womens.component';
import JacketsPage from './routes/projects/shop/products/jackets.component';
import SneakersPage from './routes/projects/shop/products/sneakers.component';

import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='projects' element={<Projects />} />
        <Route path='monsters-rolodex' element={<Monsters />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='hats' element={<HatsPage />} />
        <Route path='mens' element={<MensPage />} />
        <Route path='womens' element={<WomensPage />} />
        <Route path='jackets' element={<JacketsPage />} />
        <Route path='sneakers' element={<SneakersPage />} />
      </Route>
    </Routes>
  );
};

export default App;
