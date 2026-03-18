// src/components/FilterBar.jsx
import CalendarIcon from "./icons/CalendarIcon"; // Ejemplo de uso de sus iconos

export default function FilterBar() {
  return (
    <section className="bg-[#FFFBF5] border border-[#F3E5D5] p-6 rounded-xl shadow-sm mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Tipo de espacio</label>
          <select className="bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-orange-500">
            <option>Selecciona una opción</option>
            <option>Aula</option>
            <option>Laboratorio</option>
          </select>
        </div>
        
        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Fecha</label>
          <input type="date" className="bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-orange-500" />
        </div>

        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Rango de horario</label>
          <input type="text" placeholder="08:00 - 10:00" className="bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-orange-500" />
        </div>

        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Capacidad</label>
          <input type="number" placeholder="Personas" className="bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-orange-500" />
        </div>
      </div>
    </section>
  );
}