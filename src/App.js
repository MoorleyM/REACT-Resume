import { Routes, Route } from 'react-router-dom'

import Home from './routes/index/home.component';
import Projects from './routes/projects/projects.component';
import Monsters from './routes/projects/monsters-rolodex/monsters-rolodex.component';
import Shop from './routes/projects/shop/shop.component';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
          <Route path='projects/monsters-rolodex' element={<Monsters />} />
          <Route path='projects/shop' element={<Shop />} />
    </Routes>
  )
}

export default App;
