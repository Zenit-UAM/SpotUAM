import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { navigate } from "../Link.jsx";
export default function Dashboard() {
  const irPaginaLogout = () => {
    navigate("/logout-user", { protectedRoute: true });
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
