import { useEffect, useState } from "react";
import { verifySession } from "../services/auth";

export default function ProtectedRoute({ children }) {

  const [loading, setLoading] = useState(true);
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {

    const checkSession = async () => {
      try {

        await verifySession();
        setLoading(false);

      } catch (error) {

        setSessionExpired(true);
        setLoading(false);

      }
    };

    checkSession();

  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      {children}

      {sessionExpired && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded shadow">

            <h2 className="text-lg font-bold">
              Sesión expirada
            </h2>

            <p>Debes iniciar sesión nuevamente.</p>

            <button
              onClick={() => window.location.href = "/login"}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Ir a login
            </button>

          </div>
        </div>
      )}
    </>
  );
}
