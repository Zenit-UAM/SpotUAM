import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import ProtectedRoute from '../components/ProtectedRoute';
// Recibimos "children" como parámetro
export const MainLayout = ({ children }) => {
  return (
      <ProtectedRoute>
        <div className="flex h-screen bg-gray-50 font-sans">
          <Sidebar/>
          {/* Contenedor principal derecho */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Topbar>
              {children}
            </Topbar>
            {/* Aquí se inyecta el contenido de cada página (la "carne" de la hamburguesa) */}
            <main className="flex-1 overflow-auto bg-gray-50">
              {children} 
            </main>
          </div>
        </div>
      </ProtectedRoute>
  );
};