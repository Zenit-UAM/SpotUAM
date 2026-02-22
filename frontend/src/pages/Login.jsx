import { useState } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { navigate } from "../Link.jsx";
export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const loginUsuario = async (e) => {
    e.preventDefault();

    // 1. Preparamos los datos para enviar
    const datosParaEnviar = { email, password };

    try {
      // 2. Hacemos la petición
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosParaEnviar),
        credentials: "include",
      });

      // 3. Obtenemos el texto plano primero para evitar errores de SyntaxError
      const textoRespuesta = await response.text();

      let resultado;
      try {
        // Intentamos convertir el texto a objeto JSON
        resultado = JSON.parse(textoRespuesta);
      } catch (e) {
        console.error("El servidor no envió un JSON válido:", textoRespuesta);
        throw new Error("El servidor respondió con un error inesperado.");
      }

      // 4. Si el servidor respondió un error (ej: 400, 401, 500)
      if (!response.ok) {
        throw new Error(resultado.error || "Error en las credenciales");
      }

      // 5. CASO ÉXITO
      alert(`Bienvenido ${resultado.user.username}, has ingresado a tu cuenta`);
      navigate("/home", { protectedRoute: true });
    } catch (error) {
      // Aquí caerán todos los errores: de red, de credenciales o de servidor
      console.error("Error en el login:", error.message);
      alert(error.message);
    }
  };
  return (
    <main>
      <Card border="primary">
        <Card.Body>
          <Form onSubmit={loginUsuario}>
            <Card.Title>Inicio se sesión</Card.Title>
            <div className="login-usuario-email">
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
            <div className="login-usuario-password">
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
              Iniciar
            </Button>
          </Form>
          <div>
            ¿No tienes cuenta?
            <a href="/">Registrate</a>
          </div>
        </Card.Body>
      </Card>
    </main>
  );
}
