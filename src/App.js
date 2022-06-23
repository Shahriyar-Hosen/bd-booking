import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import List from "./Pages/List/List";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
      </Routes>
    </div>
  );
}

export default App;
