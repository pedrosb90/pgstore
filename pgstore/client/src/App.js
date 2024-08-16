import "./App.css";
import "./Navbar.css";
import "./Shop.css";
import "./Carrito.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Carrito } from "./pages/carrito/Carrito";
import { Productos } from "./pages/productos/Productos.jsx";
import { Shop_context_provider } from "./context/shop_context";
import { Success } from "./pages/success/success";
import { Failure } from "./pages/failure/failure";
import { Pending } from "./pages/pending/pending";

function App() {
  return (
    <div className="App">
      <Shop_context_provider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} />
            <Route path="/pending" element={<Pending />} />
          </Routes>
        </Router>
      </Shop_context_provider>{" "}
    </div>
  );
}

export default App;
