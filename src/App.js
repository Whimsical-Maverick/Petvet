import Navbar from "./component/Navbar";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Healthguide from "./pages/Healthguide";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Aboutus />} />
        <Route path="/register" element={<Register />} />
        <Route path="/healthguide" element={<Healthguide />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
