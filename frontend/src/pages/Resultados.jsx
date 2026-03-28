import { useEffect, useState } from 'react';
import { Pagination } from '../components/Pagination'; // Asegúrate de que esta ruta apunte a tu componente

export default function Resultados() {
    const [terminoBusqueda, setTerminoBusqueda] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);
    const totalPaginas = 1;
    
    // Extraemos el texto de la URL (lo que viene después de ?q=)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const q = params.get("q");
        setTerminoBusqueda(q || "");
    }, []);

    const informacionSalon = {
        nombre: terminoBusqueda,
        ubicacion: "Piso 5, Edificio C",
        capacidad: "40 personas",
        tipo: "Laboratorio de Cómputo",
        estado: "Disponible para reserva"
    };

    return (
        // Ya NO ponemos la Topbar aquí, porque tu MainLayout ya la pone por nosotros
        <main className="p-8 max-w-4xl mx-auto w-full">
        <div className="mb-6">
            <p className="text-gray-500 text-sm">Resultados de búsqueda para:</p>
            <h1 className="text-3xl font-bold text-primary italic">"{terminoBusqueda}"</h1>
        </div>

        {/* TARJETA DE RESULTADO */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
            <div className="bg-primary p-4 text-white font-bold flex justify-between">
            <span>Información General del Salón {informacionSalon.nombre}</span>
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
            </div>
            </div>
        </section>

        {/* TUS NUMERITOS (PAGINACIÓN) */}
        <Pagination 
            currentPage={paginaActual} 
            totalPages={totalPaginas} 
            onPageChange={(page) => setPaginaActual(page)} 
        />
        </main>
    );
}