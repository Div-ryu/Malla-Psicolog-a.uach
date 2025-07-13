const scriptJS = `
import React, { useState } from 'https://esm.sh/react';
import ReactDOM from 'https://esm.sh/react-dom/client';
import { Check, X, ChevronDown, ChevronUp, Info } from 'https://esm.sh/lucide-react';

const materiasPorSemestre = {
  1: [
    { codigo: "CIDI042", nombre: "INGLÉS I", prereq: null },
    { codigo: "DYRE070", nombre: "EDUCACIÓN FÍSICA Y SALUD", prereq: null },
    { codigo: "ELECT12", nombre: "OFG 1", prereq: null },
    { codigo: "IDEF085", nombre: "FILOSOFÍA Y EPISTEMOLOGÍA", prereq: null },
    { codigo: "IEPS022", nombre: "TEORÍA Y SISTEMAS PSICOLÓGICOS", prereq: null },
    { codigo: "IEPS027", nombre: "FUNDAMENTOS BIOLÓGICOS DEL COMPORTAMIENTO", prereq: null },
    { codigo: "IEPS033", nombre: "DESARROLLO PERSONAL", prereq: null }
  ],
  // ... (continúa igual con los semestres del 2 al 10)
};

function App() {
  const [completedCourses, setCompletedCourses] = useState({});

  const toggleCourseCompletion = (codigo) => {
    setCompletedCourses((prev) => ({
      ...prev,
      [codigo]: !prev[codigo],
    }));
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Plan Académico de Psicología</h1>
      {Object.entries(materiasPorSemestre).map(([semestre, materias]) => (
        <div key={semestre} className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Semestre {semestre}</h2>
          <ul className="space-y-1">
            {materias.map((materia) => (
              <li
                key={materia.codigo}
                className={`p-2 rounded border cursor-pointer transition-all ${
                  completedCourses[materia.codigo]
                    ? 'bg-green-100 line-through'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => toggleCourseCompletion(materia.codigo)}
              >
                {materia.codigo}: {materia.nombre}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
`

export default {
  "index.html": indexHTML,
  "estilos.css": estilosCSS,
  "script.js": scriptJS
};
