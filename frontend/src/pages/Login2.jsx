import { useState } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { navigate } from "../Link.jsx";
// JSX PARA PROBAR LOS ESTILOS.
export default function Login2() {
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
    <>
      <header>
        <img></img>
        <a href="#">Ayuda tecnica</a>
      </header>
      <main>
        <section>
            <header>
                <h1>
                    Sistema de Reserva SpotUam Cuajimalpa
                </h1>
                <p>
                    Acceso exclusivo para la comunidad universitaria
                </p>
            </header>
            <section>
                <form action="">
                    <label htmlFor="">Correo insitucional</label>
                    <input type="email" />
                    <br></br>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" />
                    <button>Inicio de sesion</button>
                </form>
                <footer>
                    <small>Al iniciar sesión, aceptas los terminos de uso y el aviso de provacidad institucional</small>
                </footer>
            </section>
        </section>
      </main>
      <footer>
        <small>
            2026 Zenit Universidad Autonoma Metropolitana - Unidad Cuajimalpa
        </small>
      </footer>
    </>
  );
}
