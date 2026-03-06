import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const LogoutModal = ({ children, onClose , onConfirm}) => {

  useEffect(() => {
    // --- 1. BLOQUEAR SCROLL ---
    // Guardamos el estilo original para restaurarlo al cerrar
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // --- 2. CERRAR CON ESC ---
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Limpieza al desmontar el componente (importante)
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // --- 3. PORTAL ---
  // Teletransportamos el JSX al final del <body>
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay con desenfoque */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200" 
        onClick={onClose} 
      />

      {/* Contenido del Modal */}
      <form 
        onSubmit={(e) => {e.preventDefault(); onConfirm();}}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-in zoom-in-95 duration-200 z-10">
        {children}


        <div className='mt-6 flex gap-3'> 
          <button 
            type='button' 
            onClick={onClose} 
            className='flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 border border-transparent rounded-xl hover:bd-gray-200 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300'>
            Cancelar
          </button>
        <button 
            type='submit' 
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-red-600 border border-transparent rounded-xl hover:bg-red-700 shadow-sm shadow-red-200 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Sí, cerrar sesión
        </button>
        </div>
      </form>
    </div>,
    document.body // Destino del portal
  );
};

