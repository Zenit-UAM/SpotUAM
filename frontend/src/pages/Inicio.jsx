import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { navigate } from "../Link.jsx";
export default function Inicio() {
  const irPaginaLogout = () => {
    navigate("/logout", { protectedRoute: true });
  };
  return (
    <main>
      <div>
        <div>
          <div>
            <h1>Hola mundo, desde el Inicio.jsx</h1>
          </div>
          <Button variant="primary" onClick={irPaginaLogout}>
            Boton para cerrar sesion
          </Button>
        </div>
      </div>
    </main>
  );
}
