import { useState } from "react";
import TablaReservas from "../components/TablaReservas";

export default function Historial() {
  // Estado para controlar qué pestaña está activa (por defecto "proximas")
  const [activeTab, setActiveTab] = useState("proximas");

  return (
    <main className="max-w-7xl mx-auto p-6">
      
      {/* 1. Título y descripción */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Mis Reservas</h1>
        <p className="mt-2 text-gray-500 text-sm">
          Gestiona tus solicitudes de espacio institucionales y eventos
        </p>
      </div>

      {/* 2. Contenedor principal (Tabla y Tabs) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Cabecera con Pestañas y Filtro */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 border-b border-gray-200">
          
          {/* Sistema de Pestañas (Tabs) */}
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("proximas")}
              className={`pb-4 text-sm font-semibold transition-colors relative ${
                activeTab === "proximas" ? "text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Próximas
              {/* Línea inferior indicadora */}
              {activeTab === "proximas" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-md"></span>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab("historial")}
              className={`pb-4 text-sm font-semibold transition-colors relative ${
                activeTab === "historial" ? "text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Historial
              {activeTab === "historial" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-md"></span>
              )}
            </button>
          </div>

          {/* Botón de Filtrar */}
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            Filtrar
          </button>
        </div>

        {/* 3. Área donde irá la tabla */}
        <div className="p-6">
          <TablaReservas />
        </div>

      </div>

      {/* 4. Banner de Ayuda Naranja (Pie de página) */}
      <div className="mt-8 bg-orange-50 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between border border-orange-100">
        <div className="flex items-center gap-4">
           {/* Círculo naranja con signo de interrogación */}
           <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
             ?
           </div>
           <div>
             <h3 className="font-bold text-gray-800">¿Necesitas ayuda con tu reserva?</h3>
             <p className="text-sm text-gray-600">Consulta nuestra guía de uso o contacta a soporte técnico</p>
           </div>
        </div>
        
        <div className="mt-4 sm:mt-0 flex gap-4">
          <button className="text-primary font-medium text-sm hover:underline">
            Guía de usuario
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
            Soporte
          </button>
        </div>
      </div>

    </main>
  );
}