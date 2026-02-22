import { useState } from "react";
import { navigate } from "../Link.jsx";
import logo from "../assets/logouamcuaji.png";
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
    <div className="w-full min-h-screen">
      {/* HEADER */}
      <header className="bg-white shadow-sm px-6 pt-4 pb-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 rounded-md" />
          <h1 className="font-bold text-lg">SpotUAM</h1>
        </div>

        <a
          href="#"
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Ayuda técnica
        </a>
      </header>

      {/* Línea divisora */}
      <div className="border-t border-gray-200"></div>

      {/* MAIN */}
      <main className="bg-backgroundlightgray min-h-screen flex items-start justify-center pt-10">
        <section className="bg-backgroundlight p-8 rounded-xl shadow-md max-w-md w-full">

          {/* HEADER DEL FORM */}
          <header className="mb-6 text-center flex flex-col items-center gap-2">
            <img src={logo} alt="Logo" className="h-14 rounded-lg" />

            <h2 className="text-xl font-bold">
              Sistema de Reserva SpotUam Cuajimalpa
            </h2>

            <p className="text-sm text-gray-600">
              Acceso exclusivo para la comunidad universitaria
            </p>
          </header>

          {/* FORM */}
          <form className="flex flex-col gap-3">
            <label>Correo institucional</label>
            <input
              type="email"
              className="shadow-md border border-gray-300 rounded px-4 py-2"
              placeholder="nombre.apellido@cua.uam.mx"
            />

            <label>Contraseña</label>
            <input
              type="password"
              className="shadow-md border border-gray-300 rounded px-4 py-2"
              placeholder="******"
            />

            <button className="bg-primary text-white py-2 rounded mt-2">
              Inicio de sesión
            </button>

            <a href="#" className="text-primary text-sm text-center">
              ¿Olvidaste tu contraseña?
            </a>

            <footer className="mt-4 text-center">
              <small>
                Al iniciar sesión, aceptas los términos de uso y el aviso de
                privacidad institucional
              </small>
            </footer>
          </form>
        </section>
      </main>

      {/* Línea divisora */}
      <div className="border-t border-gray-200"></div>

      {/* FOOTER */}
      <footer className="bg-backgroundlightgray text-center py-4 text-sm text-gray-600">
        <small>
          2026 Zenit Universidad Autónoma Metropolitana - Unidad Cuajimalpa
        </small>
      </footer>
    </div>
  );
}
