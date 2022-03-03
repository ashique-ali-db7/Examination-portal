import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Sucess from "./Pages/Sucess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sucess" element={<Sucess/>}/>
      </Routes>
    </div>
  );
}

export default App;
