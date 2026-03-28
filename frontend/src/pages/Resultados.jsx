import { useEffect, useState } from 'react';
import { Topbar } from '../components/Topbar'; // Ajusta la ruta si es necesario

export default function Resultados() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  
  // 1. Extraemos el texto de la URL (lo que viene después de ?q=)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    setTerminoBusqueda(q || "");
  }, []);

  // 2. Simulamos la información de un salón (esto vendría de la BD después)
  const informacionSalon = {
    nombre: terminoBusqueda,
    ubicacion: "Piso 5, Unidad Cuajimalpa",
    capacidad: "40 personas",
    tipo: "Laboratorio de Cómputo",
    equipamiento: ["Proyector", "Aire Acondicionado", "30 iMacs"],
    estado: "Disponible para reserva"
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-50">
      <Topbar titulo="Localizador de Espacios" />

      <main className="p-8 max-w-4xl mx-auto w-full">
        <div className="mb-6">
          <p className="text-gray-500 text-sm">Resultados de búsqueda para:</p>
          <h1 className="text-3xl font-bold text-primary italic">"{terminoBusqueda}"</h1>
        </div>

        {/* TARJETA DE RESULTADO */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-primary p-4 text-white font-bold flex justify-between">
            <span>Información General</span>
            <span className="bg-green-400 text-xs px-2 py-1 rounded text-green-900">
              {informacionSalon.estado}
            </span>
          </div>
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">Ubicación</label>
                <p className="text-gray-700 font-medium">{informacionSalon.ubicacion}</p>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">Capacidad Max.</label>
                <p className="text-gray-700 font-medium">{informacionSalon.capacidad}</p>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">Tipo de Espacio</label>
                <p className="text-gray-700 font-medium">{informacionSalon.tipo}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">Equipamiento Incluido</label>
              <ul className="grid grid-cols-2 gap-2">
                {informacionSalon.equipamiento.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-primary">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-end gap-3">
             <button className="px-6 py-2 text-gray-500 font-medium hover:underline">
               Volver al mapa
             </button>
             <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-orange-700 transition-colors">
               Ver disponibilidad detallada
             </button>
          </div>
        </section>
      </main>
    </div>
  );
}