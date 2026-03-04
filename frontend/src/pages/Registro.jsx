import { useState, useEffect } from "react";
import { navigate } from "../Link.jsx";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
export default function Registro() {
  const [username, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const enviarRegistroUsuario = async (e) => {
    e.preventDefault();

    const data = { username, email, password };

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resultado = await response.json(); // Leer la respuesta del servidor
      if (!response.ok) {
        // alert("Error: " + resultado.error);
        throw new Error(resultado.error || "Error al enviar");
      }
      alert(`Bienvenido ${resultado.username}, tu cuenta ha sido creada`);
      navigate("/login");
    } catch (error) {
      console.error("Error en el registro:", error);
      alert(error.message);
    }
  };

  return (
    <main>
      <Card border="primary">
        <Card.Body>
          <Form onSubmit={enviarRegistroUsuario}>
            <Card.Title>Registro del usuario</Card.Title>
            <div className="registro-usuario-nombre">
              <Form.Label>Nombre: </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Johan Vazquez"
                  aria-label="Username"
                  type="text"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </InputGroup>
            </div>
            <div className="registro-usuario-email">
              <Form.Label>Correo electrónico</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="johanV15@gmail.com"
                  type="email"
                  aria-label="email"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </InputGroup>
            </div>
            <div className="registro-usuario-password">
              <Form.Label>Contaseña: </Form.Label>

              <InputGroup className="mb-3">
                <Form.Control
                  type="password"
                  aria-label="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </InputGroup>
            </div>
            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </Form>
          <div>
            <p>
              ¿Ya tienes una cuenta?
              <a href="/login">Inicia sesión</a>
            </p>
          </div>
        </Card.Body>
      </Card>
    </main>
  );
}
