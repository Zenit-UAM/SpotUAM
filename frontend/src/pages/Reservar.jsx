// src/pages/Reservar.jsx
import FilterBar from "../components/FilterBar";
import SpaceCard from "../components/SpaceCard";

export default function Reservar() {
  const espacios = [
    { id: 1, nombre: "Aula 402", piso: 4, capacidad: 30, tipo: "Clase", status: "disponible" },
    { id: 2, nombre: "Laboratorio 607", piso: 6, capacidad: 25, tipo: "Práctica", status: "disponible" },
    { id: 3, nombre: "Aula Magna", piso: 6, capacidad: 100, tipo: "Diálogo", status: "ocupado" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-8">
      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-5xl font-black text-black mb-2 tracking-tight">Reservar</h1>
        <p className="text-[#FF7A00] text-lg font-semibold">
          Genera solicitudes para la reserva de un espacio institucionales
        </p>
      </div>

      {/* Barra de Filtros Crema */}
      <div className="bg-[#FFF4E5] border border-[#F3E5D5] p-8 rounded-2xl mb-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Tipo de espacio", type: "select" },
            { label: "Fecha", type: "date" },
            { label: "Rango de horario", type: "text", placeholder: "08:00 - 10:00" },
            { label: "Capacidad", type: "number", placeholder: "Ej. 30" }
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-[10px] font-bold text-gray-800 mb-2 uppercase tracking-widest border-l-2 border-[#FF7A00] pl-2">
                {field.label}
              </label>
              {field.type === "select" ? (
                <select className="bg-white border border-gray-100 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-orange-300">
                  <option>Selecciona una opción</option>
                </select>
              ) : (
                <input 
                  type={field.type} 
                  placeholder={field.placeholder}
                  className="bg-white border border-gray-100 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-orange-300" 
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {espacios.map((espacio) => (
          <SpaceCard key={espacio.id} info={espacio} />
        ))}
      </div>
    </div>
  );
}