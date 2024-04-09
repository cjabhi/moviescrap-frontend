import { useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter as router , Routes , Route, BrowserRouter} from 'react-router-dom';
import Home2 from './Components/Home2';

import All from './Components/All';
import Categories from './Components/Categories';
import Navbar from './Components/Navbar.jsx';
import Mpop from './Components/Mpop';
import Latest from './Components/Latest';
function App() {


  

  return (
    <BrowserRouter>
    <Navbar />
    <Categories />
    <Routes>
    <Route path='/' element={<Home />}  />
    <Route path='/mpop' element={<Mpop/>}/>
    <Route path='/latest' element={<Latest/>}/>
    <Route path = '/53' element = {<Home2 />} />
    <Route path="/search/:id" element={<All num = {'latest'} />}/>

    </Routes>
    </BrowserRouter>

      // <Home />
    
  );
}

export default App;
