import "./App.css";
import Registro from "./pages/Registro.jsx";
import Login from "./pages/Login.jsx";
import Inicio from "./pages/Inicio.jsx";
import Logout from "./pages/Logout.jsx";
import Dashboard from "./pages/Dashboard.jsx"
import Reservar from "./pages/Reservar.jsx"
import {MainLayout} from "./layouts/MainLayout.jsx"
import { EVENTS } from "./consts.js";
import { useEffect, useState } from "react";
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Escucha los cambios en la navigacion
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    // Se suscriben al cambio personalizado
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath === "/" && <Registro />}
      {currentPath === "/home" && <Inicio />}
      {currentPath === "/logout" && <Logout />}
      {currentPath === "/login" && <Login/>}
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
    </main>
  );
}

export default App;
