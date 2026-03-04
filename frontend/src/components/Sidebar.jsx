import { navigate } from '../Link.jsx';
import { FiGrid, FiPlusSquare, FiClock, FiCalendar, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import logoUam from '../assets/logouamcuaji.png';
import logoSpotUam from '../assets/logoSpotUAM.png';

export const Sidebar = () => {
  const currentPath = window.location.pathname;
  const isActive = (path) => currentPath === path;

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
      
      <div>
        {/* SECCIÓN DE LOGOS (Reemplazo del texto anterior por los PNG) */}
        <div className="p-6 flex items-center gap-3">
          
          {/* Logo UAM: Enlace Externo con etiqueta <a> */}
          <a 
            href="https://www.cua.uam.mx/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity"
            title="Sitio oficial UAM Cuajimalpa"
          >
            <img src={logoUam} alt="UAM Cuajimalpa" className="w-10 h-10 object-contain" />
          </a>

          {/* Logo SpotUAM: Enlace Interno al Dashboard */}
          <button 
            onClick={() => handleNavigation('/dashboard')}
            className="block hover:opacity-80 transition-opacity"
            title="Ir al inicio de SpotUAM"
          >
             <img src={logoSpotUam} alt="SpotUAM" className="w-28 object-contain" />
          </button>
        </div>

        {/* NAVEGACIÓN PRINCIPAL */}
        <nav className="flex flex-col gap-2 px-4 mt-4">
          
          <button 
            onClick={() => handleNavigation('/dashboard')} 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${isActive('/dashboard') ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <FiGrid className="text-xl" /> Dashboard
          </button>

          <button 
            onClick={() => handleNavigation('/reservar')} 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${isActive('/reservar') ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <FiPlusSquare className="text-xl" /> Reservar
          </button>

          <button 
            onClick={() => handleNavigation('/mis-reservas')} 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${isActive('/mis-reservas') ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <FiClock className="text-xl" /> Mis reservas
          </button>

          <button 
            onClick={() => handleNavigation('/calendario')} 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${isActive('/calendario') ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <FiCalendar className="text-xl" /> Calendario
          </button>

          <button 
            onClick={() => handleNavigation('/ayuda')} 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${isActive('/ayuda') ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <FiHelpCircle className="text-xl" /> Ayuda
          </button>
        </nav>
      </div>

      {/* CERRAR SESIÓN */}
      <div className="p-4 border-t border-gray-200">
        <button 
          onClick={() => handleNavigation('/logout-user')}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors text-left"
        >
          <FiLogOut className="text-xl" /> Cerrar sesión
        </button>
      </div>
    </div>
  );
};