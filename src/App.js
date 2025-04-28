import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Page/Home';
import Navbar from './components/Navbar';
import About from './Page/About';
import Rooms from './Page/Rooms';
import Prices from './Page/Prices';
import Support from './Page/Support';
import Info from './components/Info';


function App() {
  return (
    <div>
       <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    <Info/>
    </BrowserRouter>
    </div>
  );
}

export default App;
