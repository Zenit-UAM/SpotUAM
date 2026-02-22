import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { navigate } from "../Link";
export default function Logout() {
  const logoutUsuario = async (e) => {
    e.preventDefault();

    // Se hace la solicitud para cerrar sesion
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(response.error);
      }
      alert("Sesion cerrada exitosamente");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <main>
      <Card>
        <Form onSubmit={logoutUsuario}>
          <Card.Title>Cerrar Sesion</Card.Title>
          <p>¿Está seguro de cerrar sesión?</p>
          <Button variant="warning" type="submit">
            Cerrar sesión
          </Button>
        </Form>
      </Card>
    </main>
  );
}
