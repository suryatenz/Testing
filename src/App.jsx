import Deatils from "./components/Deatils"
import DisplayPage from "./components/DisplayPage";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Deatils/>} />
          <Route path="/products" element={<DisplayPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
