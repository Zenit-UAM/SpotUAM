import { useState, useEffect } from "react";
import imagen from "../assets/imagenR.jpg"
import { navigate } from '../Link.jsx';

export default function Dashboard() {

  const handleNavigation = (path) => {
    navigate(path);
  };
  const fechaHoy = new Date().toLocaleDateString("es-Es",{
    weekday:"long",
    day: "numeric",
    month: "long",
    year:"numeric"
  });
  const [user, setUser] = useState(null);
  const primerNombre = user?.username?.split(" ")[0] || "Usuario";
  useEffect(() =>{
    fetch("http://localhost:3000/verification",{
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.ok){
          setUser(data.user);
        }
     })
     .catch((err) => console.error("Error al verificar sesión",err))
  },[])
  return (
      <main className="max-w-7xl mx-auto p-6">
        {/* Header alineado con el resto del contenido */}
        <div className="flex flex-col mb-12">
          <header className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                ¡Hola, {primerNombre}!
              </h1>
              <p className="mt-2 text-primary text-sm font-medium">
                Bienvenido al sistema institucional. Hoy es {fechaHoy}
              </p>
            </div>

            <button
              type="button"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg shadow-sm transition-all"
            >
              Nueva Reserva
            </button>
          </header>
        </div>

        {/* Sección de Cartas con Grid Responsivo */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carta 1 */}
          <a 
            href="#"
            className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={()=> handleNavigation("/reservar")}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-44 bg-gray-200">
                  <img 
                    src={imagen} 
                    alt="Reservar espacio" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-800">Reservar espacio</h2>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    Inicia una nueva solicitud de aula o laboratorio
                  </p>
                </div>
              </div>
            </a>
            {/* Carta 2 */}
            <a 
            href="#"
            className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={()=> handleNavigation("/mis-reservas")}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-44 bg-gray-200">
                  <img 
                    src={imagen} 
                    alt="Mis reservas" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-800">Mis reservas</h2>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    Consulta el estado y el horario de tus trámites
                  </p>
                </div>
              </div>
            </a>
            {/* Carta 3 */}
            <a 
            href="#"
            className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={()=> handleNavigation("/calendario")}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-44 bg-gray-200">
                  <img 
                    src={imagen} 
                    alt="Disponibilidad" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-800">Disponibilidad</h2>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    Verifica horarios de espacios en tiempo real
                  </p>
                </div>
              </div>              
            </a>
        </section>
      </main>
  );
}
