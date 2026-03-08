import { useState, useEffect } from "react";
import { navigate } from "../Link.jsx";
import { registerUser } from "../services/auth.js";
import logo from "../assets/logouamcuaji.png";
export default function Registro() {
  const [username, setName] = useState("");

  const [studentID, setStudentID] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password === confirmPassword;

  const showErrorMessage = confirmPassword.length > 0 && !passwordsMatch;


  const enviarRegistroUsuario = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, studentID, email, password);
      navigate("/login");
    } catch (error) {
      console.error("Error en el registro:", error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
      <main className="bg-backgroundlightgray flex-1 flex items-start justify-center pt-10">
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
          <form className="flex flex-col gap-3" onSubmit={enviarRegistroUsuario}>
          <div className="flex flex-col items-start">
              <label className="mb-1 text-sm font-semibold">Nombre Completo</label>
              <input
                type="text"
                className="w-full shadow-md border border-gray-300 rounded-xl px-4 py-2"
                placeholder="Juan Perez García"
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="flex flex-col items-start">
              <label className="mb-1 text-sm font-semibold">Matrícula</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full shadow-md border border-gray-300 rounded-xl px-4 py-2"
                placeholder="2233045679"
                onChange={(e) => setStudentID(e.target.value)}
                required
                />
            </div>
            <div className="flex flex-col items-start">
              <label className="mb-1 text-sm font-semibold">Correo institucional</label>
              <input
                type="email"
                className="w-full shadow-md border border-gray-300 rounded-xl px-4 py-2"
                placeholder="nombre.apellido@cua.uam.mx"
                onChange={(e) => setEmail(e.target.value)}
                required
                />

            </div>
            <div className="space-y-4">
              {/* Contenedor Flex para ponerlos en la misma línea */}
              <div className="flex flex-col md:flex-row gap-4">
                
                {/* Columna Contraseña */}
                <div className="flex-1 flex flex-col items-start">
                  <label className="mb-1 text-sm font-semibold">Contraseña</label>
                  <input
                    type="password"
                    className={`w-full shadow-md border rounded-xl px-4 py-2 outline-none transition-all ${
                      showErrorMessage ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="***********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Columna Confirmar Contraseña */}
                <div className="flex-1 flex flex-col items-start">
                  <label className="mb-1 text-sm font-semibold">Confirmar contraseña</label>
                  <input
                    type="password"
                    className={`w-full shadow-md border rounded-xl px-4 py-2 outline-none transition-all ${
                      showErrorMessage ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="***********"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Mensaje de Error dinámico */}
              {showErrorMessage && (
                <p className="text-red-500 text-xs font-medium animate-pulse">
                  ⚠️ Las contraseñas no coinciden
                </p>
              )}
            </div>

            <button  
              disabled={!password || !passwordsMatch }  
              className="bg-primary text-white py-2 rounded-xl mt-1 disabled:bg-gray-400 disabled:cursor-not-allowed">
              Registrar
            </button>

            <a 
              href="#"
              onClick={() => {navigate("/login")}} 
              className="text-primary text-sm text-center">
              ¿Ya tienes cuenta? Inicia Sesión
            </a>
                  {/* Línea divisora */}
            <div className="border-t border-gray-200"></div>
            <footer className="mt-4 text-center">
              <small>
                Al registrarte, aceptas los términos de uso y el aviso de
                privacidad institucional
              </small>
            </footer>
          </form>
        </section>
      </main>

      {/* Línea divisora */}
      <div className="border-t border-gray-200"></div>

      {/* FOOTER */}
      <footer className="bg-backgroundlightgray py-4 text-sm text-gray-600">
        <div className="w-full px-6 flex justify-between items-center ">
          {/* IZQUIERDA */}
          <small>
            &copy; 2026 Zenit Universidad Autónoma Metropolitana - Unidad Cuajimalpa
          </small>

          {/* DERECHA */}
          <ul className="flex gap-4">
            <li><a href="#" className="hover:underline"><small>Privacidad</small></a></li>
            <li><a href="#" className="hover:underline"><small>Términos</small></a></li>
            <li><a href="#" className="hover:underline"><small>Contacto</small></a></li>
          </ul>

        </div>
      </footer>
    </div>
  );
}
