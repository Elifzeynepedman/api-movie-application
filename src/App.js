import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import Genre from './pages/Genre/Genre'
import Home from './pages/Home/Home';
import Trending from './components/Trending/Trending';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Genre" element={<Genre/>}/>
        <Route path="/Trending" element={<Trending/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
