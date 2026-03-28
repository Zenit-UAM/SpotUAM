import { useState } from "react";
import { navigate } from "../Link.jsx";
import logo from "../assets/logouamcuaji.png";
import { loginUser } from "../services/auth.js";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// JSX PARA PROBAR LOS ESTILOS.
export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginUsuario = async (e) => {
    e.preventDefault();
    try{
      await loginUser(email, password);
      navigate("/home");
    }catch(error){
      const mensaje = error.response?.data?.error || "Error en las credenciales";
      alert(mensaje)
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
          <form className="flex flex-col gap-3" onSubmit={loginUsuario}>
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
            <div className="flex flex-col items-start">
              <label className="mb-1 text-sm font-semibold">Contraseña</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full shadow-md border border-gray-300 rounded-xl px-4 py-2 pr-10"
                  placeholder="***********"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800 cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>
              </div>
            {/* DIV PARA EL CHECKBOX DE SESION*/}
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-primary cursor-pointer"
                />
              <p className="text-sm text-primary">
                Recordar mi sesión
              </p>
            </div>

            <button className="bg-primary text-white py-2 rounded-xl mt-1">
              Iniciar sesión
            </button>

            <a href="#" className="text-primary text-sm text-center">
              ¿Olvidaste tu contraseña?
            </a>
                  {/* Línea divisora */}
            <div className="border-t border-gray-200"></div>
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
