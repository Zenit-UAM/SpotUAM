import "./App.css";
// Tus páginas públicas
import Registro from "./pages/Registro.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Dashboard from "./pages/Dashboard.jsx"
import Reservar from "./pages/Reservar.jsx"
import Historial from "./pages/Historial.jsx"
import Calendario from "./pages/Calendario.jsx"
import Ayuda from "./pages/Ayuda.jsx"
import {MainLayout} from "./layouts/MainLayout.jsx"
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
      {currentPath === "/home" && <Inicio />}
      {currentPath === "/logout" && <Logout />}
      {currentPath === "/login" && <Login/>}
      {/* ----------------------------------*/}
      {currentPath === "/dashboard" && (
        <MainLayout>
          {/* El Dashboard es el "children" que se inyecta en el layout*/}
          <Dashboard/>
        </MainLayout>
      )}
      {/*Asi es como se iran agreganto las demas secciones*/}
      {currentPath === "/reservar" &&(
        <MainLayout>
            <Reservar/>
        </MainLayout>
      )}
      {currentPath === "/mis-reservas" &&(
        <MainLayout>
            <Historial/>
        </MainLayout>
      )}
      {currentPath === "/calendario" &&(
        <MainLayout>
          <Calendario/>
        </MainLayout>
      )}
      {currentPath === "/ayuda" &&(
        <MainLayout>
          <Ayuda/>
        </MainLayout>
      )}
      </>
  );
}

export default App;
