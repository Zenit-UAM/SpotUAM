import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null; 

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-2 mt-8 mb-4">
        {/* Botón Izquierda */}
        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
            <FiChevronLeft className="text-gray-600" />
        </button>

        {/* Números dinámicos */}
        {pages.map((page) => (
            <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                currentPage === page
                ? "bg-primary text-white shadow-md" // Naranja si es la activa
                : "text-gray-600 hover:bg-gray-100" // Gris si no lo es
            }`}
            >
            {page}
            </button>
        ))}

        {/* Botón Derecha */}
        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
            <FiChevronRight className="text-gray-600" />
        </button>
        </div>
    );
};