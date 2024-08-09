import "./App.css";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <header className="App-header">Punta Goods</header>
        <Routes>
          <Route path="/" />
          <Route path="/carrito" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
