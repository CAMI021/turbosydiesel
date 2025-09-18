import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Downloads from "./pages/Downloads";
import Payments from "./pages/Payments";
import Services from "./pages/Services";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
// Nuevos componentes para equipos
import Equipment from "./pages/Equipment";
import EquipmentCategory from "./pages/EquipmentCategory";
import EquipmentDetails from "./pages/EquipmentDetails";

// IMPORTAMOS LOS COMPONENTES DE LAYOUT AL FINAL (¡CRUCIAL PARA VITE!)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButton from "./components/Floating";

// Layout CORRECTO con Outlet
const AppLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
    <FloatingButton />
  </div>
);

// Configuración CORRECTA de rutas (orden específica → general)
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/downloads", element: <Downloads /> },
      { path: "/payments", element: <Payments /> },
      
      // RUTAS DE PRODUCTOS (mantenemos las originales)
      { 
        path: "/products/:categoryKey/:productId", 
        element: <ProductDetails /> 
      },
      { 
        path: "/products/:categoryKey", 
        element: <Category /> 
      },
      { 
        path: "/products", 
        element: <Products /> 
      },
      
      // NUEVAS RUTAS DE EQUIPOS
      { 
        path: "/equipos/:categoryKey/:equipmentId", 
        element: <EquipmentDetails /> 
      },
      { 
        path: "/equipos/:categoryKey", 
        element: <EquipmentCategory /> 
      },
      { 
        path: "/equipos", 
        element: <Equipment /> 
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;