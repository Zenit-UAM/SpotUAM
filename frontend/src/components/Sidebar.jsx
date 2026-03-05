import { navigate } from '../Link.jsx';
import { FiGrid, FiPlusSquare, FiClock, FiCalendar, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import logoUam from '../assets/logouamcuaji.png';
import logoSpotUam from '../assets/logoSpotUAM.png';
import DashboardIcon from './icons/DashboardIcon.jsx';
import CalendarAddIcon from "./icons/CalendarAddIcon.jsx";
import CalendarIcon from "../components/icons/CalendarIcon";
import HistoryIcon from "../components/icons/HistoryIcon"
import HelpCenterIcon from "../components/icons/HelpCenterIcon"
import LogoutIcon from "../components/icons/LogoutIcon"
export const Sidebar = () => {
  //const currentPath = window.location.pathname;
  //const isActive = (path) => currentPath === path;

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
            className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
          >
            <DashboardIcon
              className="w-5 h-5 text-black group-hover:text-primary/80"
            /> Dashboard
          </button>

          <button
            onClick={() => handleNavigation('/reservar')}
            className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
          >
             <CalendarAddIcon
                        className="w-5 h-5 text-black group-hover:text-primary/80"
                    /> Reservar
          </button>

          <button
            onClick={() => handleNavigation('/mis-reservas')}
            className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
          >
            <HistoryIcon
                    className="w-5 h-5 text-black group-hover:text-primary/80"
                /> Mis reservas
          </button>

          <button
            onClick={() => handleNavigation('/calendario')}
            className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
          >
            <CalendarIcon
                    className="w-5 h-5 text-black group-hover:text-primary/80"
                /> Calendario
          </button>

          <button
            onClick={() => handleNavigation('/ayuda')}
            className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
          >
            <HelpCenterIcon
                        className="w-5 h-5 text-black group-hover:text-primary/80"
                    />Ayuda
          </button>
        </nav>
      </div>

      {/* CERRAR SESIÓN */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => handleNavigation('/logout-user')}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors text-left"
        >
          <LogoutIcon
                    className="w-5 h-5 text-black group-hover:text-primary/80"
                /> Cerrar sesión
        </button>
      </div>
    </div>
  );
};
