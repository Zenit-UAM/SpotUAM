// src/components/SpaceCard.jsx
export default function SpaceCard({ info }) {
  const isAvailable = info.status === "disponible";

  return (
    <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Imagen y Badge */}
      <div className="relative p-3">
        <img 
          src={info.image || "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=600"} 
          className="w-full h-48 object-cover rounded-[1.5rem]" 
          alt={info.nombre}
        />
        <div className={`absolute top-6 left-6 px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1 shadow-sm ${
          isAvailable ? 'bg-green-500 text-white' : 'bg-red-600 text-white'
        }`}>
          <span className="text-xs">●</span> {isAvailable ? 'Disponible' : 'Ocupado'}
        </div>
      </div>

      {/* Cuerpo */}
      <div className="px-6 pb-6 pt-2 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-gray-800 mb-4">{info.nombre}</h3>
        
        {/* Grid de detalles interna (2 columnas) */}
        <div className="grid grid-cols-2 gap-y-4 mb-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="text-lg"></span> <span>Piso {info.piso}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="text-lg"></span> <span>{info.capacidad} personas</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="text-lg"></span> <span>{info.tipo}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="text-lg"></span> <span>Wi-Fi</span>
          </div>
        </div>

        {/* Botón */}
        <button 
          disabled={!isAvailable}
          className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${
            isAvailable 
            ? 'bg-[#FF7A00] text-white hover:bg-orange-600 shadow-md active:scale-95' 
            : 'bg-[#DEDEDE] text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAvailable ? 'Reservar espacio' : 'No disponible'}
        </button>
      </div>
    </div>
  );
}