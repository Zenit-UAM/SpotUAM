import React, { useState } from 'react';
// Importamos los iconos necesarios
import {
  BookOpen,
  FlaskConical,
  Presentation,
  Users,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

export default function Calendario() {
  const [categoriaActiva, setCategoriaActiva] = useState("Aula");

  const horas = ["08:00", "09:00", "10:00", "11:00", "12:00"];
  const dias = [
    { etiqueta: "LUN", num: 12 },
    { etiqueta: "MAR", num: 13, hoy: true },
    { etiqueta: "MIE", num: 14 },
    { etiqueta: "JUE", num: 15 },
    { etiqueta: "VIE", num: 16 },
  ];

  // Mapeo de categorías con sus componentes de icono
  const categorias = [
    { n: "Aula", i: BookOpen },
    { n: "Laboratorio", i: FlaskConical },
    { n: "Auditorio", i: Presentation },
    { n: "Conferencia", i: Users }
  ];

  return (
    <div className="flex h-screen bg-[#F4F4F4] font-sans">
     
      {/* --- SIDEBAR IZQUIERDO --- */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-6 overflow-y-auto">
        <p className="text-[11px] font-bold text-black uppercase tracking-widest mb-4">Categoría</p>
        <nav className="mb-10 space-y-1">
          {categorias.map((cat) => {
            const Icono = cat.i; // Asignamos el icono a una variable capitalizada
            return (
              <button
                key={cat.n}
                onClick={() => setCategoriaActiva(cat.n)}
                className={`flex items-center w-full px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  categoriaActiva === cat.n ? "bg-[#FFEDE0] text-[#FF7A00]" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icono size={18} className="mr-3 opacity-80" />
                {cat.n}
              </button>
            );
          })}
        </nav>

        <p className="text-[11px] font-bold text-black uppercase tracking-widest mb-4">Ubicación</p>
        <div className="mb-10 space-y-3 pl-1">
          {["8vo Piso", "7mo Piso", "6to Piso", "5to Piso", "4to Piso", "3er Piso", "2do Piso", "1er Piso"].map(piso => (
            <label key={piso} className="flex items-center text-[13px] text-gray-800 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 border-gray-300 rounded mr-3 accent-orange-500" />
              <span className="group-hover:text-black">Torre A - {piso}</span>
            </label>
          ))}
        </div>

        <div className="bg-[#FFF2E6] rounded-xl p-5 border border-[#FFE0CC]">
          <p className="text-[11px] font-bold text-[#D46B08] uppercase tracking-widest mb-4">Leyenda</p>
          <div className="space-y-3 text-[13px] font-bold text-gray-800">
            <div className="flex items-center"><div className="w-4 h-4 bg-white border border-green-400 rounded-sm mr-3" /> Disponible</div>
            <div className="flex items-center"><div className="w-4 h-4 bg-[#EBEBEB] border border-gray-300 rounded-sm mr-3" /> Ocupado</div>
            <div className="flex items-center"><div className="w-4 h-4 bg-[#FFEBD6] border border-[#FFCC99] rounded-sm mr-3" /> Mi reserva</div>
          </div>
        </div>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-black mb-2 tracking-tight">Calendario</h1>
          <p className="text-[#D46B08] text-lg font-medium">Semana 12 de 16 de Marzo, 2026</p>
        </header>

        {/* Controles superiores */}
        <div className="flex justify-end items-center gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-1 flex shadow-sm">
            <button className="px-5 py-1 text-sm font-bold text-[#FF7A00] border-r border-gray-100">Día</button>
            <button className="px-5 py-1 text-sm font-medium text-gray-400">Semana</button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-1 flex shadow-sm items-center">
            <button className="px-3 text-gray-400 font-bold hover:text-black transition-colors">
              <ChevronLeft size={20} />
            </button>
            <span className="px-4 text-[11px] font-bold text-gray-800 tracking-widest uppercase">Ayer</span>
            <button className="px-3 text-gray-400 font-bold hover:text-black transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
          <button className="bg-[#FF7A00] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-orange-100 flex items-center hover:bg-[#e66e00] transition-colors">
            <Plus size={18} className="mr-2" /> Nueva Reserva
          </button>
        </div>

        {/* Tabla / Grid */}
        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden rounded-sm">
          {/* Header de la tabla */}
          <div className="grid grid-cols-6 border-b border-gray-200 bg-white">
            <div className="p-6 border-r border-gray-100 bg-[#F9F9F9]"></div>
            {dias.map(dia => (
              <div key={dia.etiqueta} className={`p-4 text-center border-r border-gray-100 last:border-0 ${dia.hoy ? 'bg-[#FFF2E6]' : ''}`}>
                <p className="text-[11px] font-bold text-black mb-1">{dia.etiqueta}</p>
                <p className={`text-3xl font-bold ${dia.hoy ? 'text-[#FF7A00]' : 'text-gray-800'}`}>{dia.num}</p>
                {dia.hoy && <div className="w-1.5 h-1.5 bg-[#FF7A00] rounded-full mx-auto mt-1" />}
              </div>
            ))}
          </div>

          {/* Filas */}
          <div className="relative">
            {horas.map(hora => (
              <div key={hora} className="grid grid-cols-6 border-b border-gray-200 last:border-0 min-h-[100px]">
                <div className="p-4 border-r border-gray-100 text-[11px] font-bold text-black flex justify-center pt-2 bg-[#F9F9F9]">
                  {hora}
                </div>
                {dias.map(dia => (
                  <div key={`${dia.etiqueta}-${hora}`} className="border-r border-gray-100 last:border-0 relative p-1.5 hover:bg-gray-50 transition-colors">
                    {hora === "09:00" && dia.etiqueta === "LUN" && (
                      <div className="bg-[#FFF2E6] border-l-4 border-[#FF7A00] p-2 h-full shadow-sm">
                        <p className="text-[10px] font-bold text-[#FF7A00]">Pro. Orientado a Objetos</p>
                        <p className="text-[10px] text-gray-500 font-medium">Dr. Martínez</p>
                      </div>
                    )}
                    {hora === "09:00" && dia.etiqueta === "MIE" && (
                      <div className="bg-[#F2F2F2] border-l-4 border-gray-400 p-2 h-full shadow-sm">
                        <p className="text-[10px] font-bold text-gray-600">Mantenimiento</p>
                      </div>
                    )}
                    {hora === "11:00" && dia.etiqueta === "MAR" && (
                      <div className="bg-[#FFF2E6] border-l-4 border-[#FFCC99] p-2 h-full shadow-sm">
                        <p className="text-[10px] font-bold text-[#FFCC99]">Seminario</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Línea de tiempo naranja (Ahora) */}
            <div className="absolute left-0 right-0 border-t-2 border-[#FF7A00] z-10 pointer-events-none" style={{ top: '48%' }}>
              <div className="w-3 h-3 bg-[#FF7A00] rounded-full -mt-[7px] ml-[16.6%] shadow-sm" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


