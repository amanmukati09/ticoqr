import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMenu from "./components/CreateMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/main" element={<Home />}></Route>
          <Route path="/create-menu" element={<CreateMenu />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
