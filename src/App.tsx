import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Downloads from "./pages/Downloads";
import Payments from "./pages/Payments";
import Footer from "./components/Footer";
import FloatingButton from "./components/Floating"; 
import Prueba from "./pages/Prueba"; // 👈 Importa el nuevo componente

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Navbar />

        {/* 👇 quité el padding global para evitar los márgenes blancos */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/prueba" element={<Prueba />} /> {/* 👈 Nueva ruta */}
          </Routes>
        </main>

        <Footer />

        {/* 👇 Botón flotante, siempre visible */}
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;
