export default function TablaReservas() {
  // Estos son datos de prueba para que se vea igual a tu Figma
  const reservas = [
    {
      id: 1,
      espacio: "Aula A-402",
      actividad: "Seminario de Sustentabilidad",
      fecha: "Mañana, 19 Feb",
      hora: "10:00 - 12:00 hrs",
      estado: "Confirmado",
      colorEstado: "bg-green-100 text-green-700"
    },
    {
      id: 2,
      espacio: "Aula Magna",
      actividad: "Conferencia",
      fecha: "Viernes, 20 Feb",
      hora: "14:00 - 17:00 hrs",
      estado: "Pendiente",
      colorEstado: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200 text-gray-500 text-sm">
            <th className="pb-3 font-semibold">ESPACIO/ACTIVIDAD</th>
            <th className="pb-3 font-semibold">FECHA Y HORA</th>
            <th className="pb-3 font-semibold text-center">ESTADO</th>
            <th className="pb-3 font-semibold text-center">ACCIONES</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {reservas.map((reserva) => (
            <tr key={reserva.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4">
                <p className="font-bold text-gray-800">{reserva.espacio}</p>
                <p className="text-gray-500">{reserva.actividad}</p>
              </td>
              <td className="py-4">
                <p className="font-bold text-gray-800">{reserva.fecha}</p>
                <p className="text-gray-500">{reserva.hora}</p>
              </td>
              <td className="py-4 text-center">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${reserva.colorEstado}`}>
                  {reserva.estado}
                </span>
              </td>
              <td className="py-4 text-center">
                <button className="text-gray-500 hover:text-primary mx-2">✏️</button>
                <button className="text-gray-500 hover:text-primary mx-2">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}