import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Carrito } from "./pages/carrito/carrito";
import { Productos } from "./pages/productos/Productos.jsx";
import { Shop_context_provider } from "./context/shop_context";

import "./App.css";
import "./Navbar.css";
import "./Shop.css";
import "./Carrito.css";

function App() {
  return (
    <div className="App">
      <Shop_context_provider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </Router>
      </Shop_context_provider>{" "}
    </div>
  );
}

export default App;
