import { useState } from "react";

export default function Ayuda() {
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  const faqs = [
    {
      id: 1,
      pregunta: "¿Cómo puedo reservar un espacio en SpotUAM?",
      respuesta: "Ve a la sección 'Reservar espacio' en tu panel principal, elige el aula o laboratorio que necesites, selecciona la fecha y horario disponible, y haz clic en 'Confirmar'. Recibirás una notificación cuando tu reserva sea aprobada."
    },
    {
      id: 2,
      pregunta: "¿Puedo cancelar o modificar una reserva?",
      respuesta: "Sí, puedes cancelar desde la pestaña 'Mis Reservas'. Te pedimos hacerlo con al menos 2 horas de anticipación para liberar el espacio para otros compañeros."
    },
    {
      id: 3,
      pregunta: "¿Qué hago si encuentro el aula ocupada en mi horario?",
      respuesta: "Primero verifica en tu panel que la reserva esté en estado 'Confirmado'. Si es así, puedes mostrar tu confirmación digital a las personas en el aula. Si el problema persiste, acude a la coordinación correspondiente."
    },
    {
      id: 4,
      pregunta: "¿Quiénes pueden utilizar este sistema?",
      respuesta: "El sistema es exclusivo para la comunidad universitaria. Necesitas iniciar sesión con tu correo institucional y matrícula vigente."
    }
  ];

  const togglePregunta = (id) => {
    if (preguntaAbierta === id) {
      setPreguntaAbierta(null); 
    } else {
      setPreguntaAbierta(id); 
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      
      {/* 1. Encabezado */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Centro de Ayuda</h1>
        <p className="mt-2 text-gray-500 text-sm">
          Encuentra respuestas a las preguntas más comunes sobre el sistema de reservas.
        </p>
      </div>

      {/* 2. Sección de Preguntas Frecuentes (Acordeón) */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-100 last:border-0">
            <button
              onClick={() => togglePregunta(faq.id)}
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <span className="font-semibold text-gray-700">{faq.pregunta}</span>
              {/* Icono de flecha*/}
              <span className={`text-gray-400 transform transition-transform duration-200 ${preguntaAbierta === faq.id ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            
            {preguntaAbierta === faq.id && (
              <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed bg-gray-50">
                {faq.respuesta}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* 3. Tarjeta de Contacto Directo (Obvio una propuesta)*/}
      <section className="bg-orange-50 rounded-xl p-8 border border-orange-100 text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
          ✉️
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">¿Aún tienes dudas?</h2>
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          Si no encontraste la respuesta que buscabas, nuestro equipo de soporte técnico está listo para ayudarte con cualquier problema en el sistema.
        </p>
        <button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg shadow-sm transition-colors">
          Contactar a Soporte
        </button>
      </section>

    </main>
  );
}