import { Routes, Route } from 'react-router-dom'

import Home from './routes/index/home.component';
import Projects from './routes/projects/projects.component';
import Monsters from './routes/projects/monsters-rolodex/monsters-rolodex.component';
import Shop from './routes/projects/shop/shop.component';
import Authentication from './routes/navigation/authentication/authentication.component';
import Navbar from './routes/navigation/navbar/navbar.component';
import HatsPage from './routes/projects/shop/hats.component';

import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
          <Route path='projects/monsters-rolodex' element={<Monsters />} />
          <Route path='projects/shop' element={<Shop />} />
            <Route path='projects/shop/auth' element={<Authentication />} />
            <Route path='projects/shop/hats' element={<HatsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
