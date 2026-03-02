import "./App.css";
// Tus páginas públicas
import Registro from "./pages/Registro.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Login2 from "./pages/Login2.jsx";

// Tus páginas privadas (las que van dentro del sistema)
import Dashboard from "./pages/Dashboard.jsx"; // O Inicio.jsx, dependiendo de cómo lo llamaste
import Reservar from "./pages/Reservar.jsx";
//import Reservar from "./pages/Mis_reservas.jsx";
//import Reservar from "./pages/Calendario.jsx";
//import Reservar from "./pages/Ayuda.jsx";

// EL IMPORT CLAVE DEL LAYOUT
import { MainLayout } from "./layouts/MainLayout.jsx"; 

import { EVENTS } from "./consts.js";
import { useEffect, useState } from "react";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <>
      {/* RUTAS PÚBLICAS (No necesitan el menú lateral ni superior) */}
      {currentPath === "/" && <Registro />}
      {currentPath === "/login-user" && <Login />}
      {currentPath === "/login2" && <Login2 />}
      {currentPath === "/logout-user" && <Logout />}

      {/* RUTAS PRIVADAS (Aquí es donde aplicamos el "Televisor") */}
      
      {currentPath === "/dashboard" && (
        <MainLayout>
          {/* El Dashboard es el "children" que se inyecta en el layout */}
          <Dashboard /> 
        </MainLayout>
      )}

      {/* Así es como irás agregando tus demás secciones: */}
      {currentPath === "/reservar" && (
        <MainLayout>
          <Reservar /> 
        </MainLayout>
      )}
      
      {/* Puedes seguir este patrón para /mis-reservas, /calendario, etc. */}
    </>
  );
}

export default App;