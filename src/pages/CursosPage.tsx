import { useState } from 'react';

const COURSES = [
  { id: 1, title: 'Curso React Desde Cero', description: 'Aprende a crear SPA modernas y dinámicas con React y Vite.', price: 25000 },
  { id: 2, title: 'Curso Backend con Node & Express', description: 'Domina el desarrollo del lado del servidor y APIs RESTful.', price: 30000 },
  { id: 3, title: 'Curso DBA Profesional', description: 'Gestión y optimización de bases de datos relacionales y NoSQL.', price: 40000 },
  { id: 4, title: 'Curso Python Avanzado', description: 'Análisis de datos, automatización y desarrollo backend.', price: 35000 },
  { id: 5, title: 'Curso UX/UI Design', description: 'Crea interfaces atractivas y mejora la experiencia del usuario.', price: 20000 },
  { id: 6, title: 'Curso DevOps Essentials', description: 'Docker, CI/CD, despliegues y contenedores simplificados.', price: 45000 }
];

export default function CursosPage() {
  const [loading, setLoading] = useState<number | null>(null);

  const handlePurchase = async (course: typeof COURSES[0]) => {
    setLoading(course.id);
    const token = localStorage.getItem('token');
    
    try {
      const response = await fetch('http://localhost:3000/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: course.title,
          price: course.price
        })
      });

      const data = await response.json();
      
      if (response.ok && data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Hubo un error al crear la preferencia de pago.");
        console.error(data);
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("No se pudo conectar con el servidor.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Catálogo de Cursos</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Potenciá tu carrera con nuestra selección de cursos. Pagá seguro con Mercado Pago.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSES.map((course) => (
          <div key={course.id} className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col h-full transition-transform hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
            <p className="text-white/60 mb-4 flex-grow">{course.description}</p>
            <div className="mt-auto">
              <p className="text-2xl font-bold text-emerald-400 mb-4">${course.price.toLocaleString('es-AR')}</p>
              <button
                onClick={() => handlePurchase(course)}
                disabled={loading === course.id}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {loading === course.id ? 'Cargando...' : 'QUIERO ESTE CURSO'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
