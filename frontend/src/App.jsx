import "./App.css";
import Registro from "./pages/Registro.jsx";
import Login from "./pages/Login.jsx";
import Inicio from "./pages/Inicio.jsx";
import Logout from "./pages/Logout.jsx";
import Login2 from "./pages/Login.jsx"
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
      {currentPath === "/login" && <Login2/>}
    </main>
  );
}

export default App;
