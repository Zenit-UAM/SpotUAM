import { useEffect, useState } from 'react';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import { verifySession } from "../services/auth.js"; 
import { navigate } from "../Link.jsx"; // <-- 1. Importante para movernos de página

export const Topbar = ({ titulo = "Dashboard", onSearch }) => {
  const [user, setUser] = useState(null);
  const [busqueda, setBusqueda] = useState(""); 

  const primerNombre = user?.username?.split(" ")[0] || "Usuario";

  useEffect(() => {
    verifySession()
      .then((data) => {
        if (data.ok) setUser(data.user);
      })
      .catch((err) => console.error("Error al verificar sesión", err));
  }, []);

    // 3. Función para procesar la búsqueda al dar Enter  
    const ejecutarBusqueda = (e) => {
    if (e.key === 'Enter' && busqueda.trim() !== "") {
      // Esto llevará al usuario a una URL como: /buscar?q=545
      navigate(`/buscar?q=${encodeURIComponent(busqueda)}`);
      setBusqueda(""); 
    }
  };


  return (
    <div className="h-20 bg-white border-b border-gray-200 flex justify-between items-center px-8 w-full">
      <h2 className="text-2xl font-bold text-gray-800">{titulo}</h2>

      <div className="flex items-center gap-6">
        {/* BUSCADOR */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input 
            type="text" 
            placeholder="Buscar espacios..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)} // Actualiza el estado
            onKeyDown={ejecutarBusqueda} // Escucha el "Enter"
            className="bg-gray-100 text-gray-700 pl-10 pr-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-primary w-72 transition-all"
          />
        </div>

        {/* 2. Ícono de Notificaciones */}
        <button className="relative text-gray-500 hover:text-primary transition-colors">
          <FiBell className="text-2xl" />
          {/* Indicador de notificación nueva (puntito rojo) */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* 3. Línea separadora vertical */}
        <div className="h-8 w-px bg-gray-300"></div>

        {/* 4. Perfil de Usuario */}
        <button className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer">
          <div className="text-right hidden md:block">
            <p className="font-bold text-sm text-gray-800 leading-none">
              {user ? primerNombre : "Cargando..."}
            </p>
            <p className="text-xs text-gray-500 mt-1">Estudiante</p>
          </div>
          {/* Círculo con la inicial del usuario */}
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
            {user ? user.username?.charAt(0).toUpperCase() : "?"}
          </div>
          <FiChevronDown className="text-gray-500" />
        </button>

      </div>
    </div>
  );
};