const materias = [
  // Año 1 - Semestre 1
  { codigo: "CIDI042", nombre: "INGLÉS I", semestre: 1 },
  { codigo: "DYRE070", nombre: "EDUCACIÓN FÍSICA Y SALUD", semestre: 1 },
  { codigo: "ELECT12", nombre: "OFG 1", semestre: 1 },
  { codigo: "IDEF085", nombre: "FILOSOFÍA Y EPISTEMOLOGÍA", semestre: 1 },
  { codigo: "IEPS022", nombre: "TEORÍA Y SISTEMAS PSICOLÓGICOS", semestre: 1 },
  { codigo: "IEPS027", nombre: "FUNDAMENTOS BIOLÓGICOS DEL COMPORTAMIENTO", semestre: 1 },
  { codigo: "IEPS033", nombre: "DESARROLLO PERSONAL", semestre: 1 },

  // Año 1 - Semestre 2
  { codigo: "CIDI048", nombre: "INGLÉS II", semestre: 2, requisitos: ["CIDI042"] },
  { codigo: "CIDI082", nombre: "COMUNICACIÓN ORAL Y ESCRITA", semestre: 2 },
  { codigo: "ELECT13", nombre: "OFG 2", semestre: 2 },
  { codigo: "IEPS065", nombre: "PROCESOS PSICOLÓGICOS", semestre: 2, requisitos: ["IEPS022"] },
  { codigo: "IEPS072", nombre: "PROCESOS SOCIALES", semestre: 2 },
  { codigo: "IEPS077", nombre: "PSICOFISIOLOGÍA", semestre: 2, requisitos: ["IEPS027"] },

  // Año 2 - Semestre 3
  { codigo: "ELECT16", nombre: "OFG 3", semestre: 3 },
  { codigo: "IEPS082", nombre: "PSICOLOGÍA DEL APRENDIZAJE", semestre: 3, requisitos: ["IEPS022"] },
  { codigo: "IEPS087", nombre: "CICLO VITAL I", semestre: 3 },
  { codigo: "IEPS092", nombre: "PSICOLOGÍA SOCIAL I", semestre: 3, requisitos: ["IEPS072"] },
  { codigo: "IEPS097", nombre: "METODOLOGÍA DE INVESTIGACIÓN CUANTITATIVA I", semestre: 3 },
  { codigo: "IEPS099", nombre: "DESARROLLO DE COMPETENCIAS ACADÉMICAS", semestre: 3 },

  // Año 2 - Semestre 4
  { codigo: "ELECT95", nombre: "OFG 4", semestre: 4 },
  { codigo: "IEPS102", nombre: "PSICOLOGÍA DE LA PERSONALIDAD", semestre: 4, requisitos: ["IEPS087", "IEPS065"] },
  { codigo: "IEPS107", nombre: "CICLO VITAL II", semestre: 4, requisitos: ["IEPS087"] },
  { codigo: "IEPS112", nombre: "PSICOLOGÍA SOCIAL II", semestre: 4, requisitos: ["IEPS092"] },
  { codigo: "IEPS117", nombre: "METODOLOGÍA DE INVESTIGACIÓN CUANTITATIVA II", semestre: 4, requisitos: ["IEPS097"] },
  { codigo: "IEPS122", nombre: "TALLER DE VINCULACIÓN CON EL MEDIO", semestre: 4, requisitos: ["IEPS099"] },

  // Año 3 - Semestre 5
  { codigo: "ELECT20", nombre: "OPTATIVO PROFESIONAL 1", semestre: 5 },
  { codigo: "ICED157", nombre: "METODOLOGÍA DE INVESTIGACIÓN CUALITATIVA", semestre: 5 },
  { codigo: "IEPS127", nombre: "EVALUACIÓN PSICOLÓGICA I", semestre: 5, requisitos: ["IEPS065"] },
  { codigo: "IEPS132", nombre: "PSICOPATOLOGÍA", semestre: 5, requisitos: ["IEPS077", "IEPS102"] },
  { codigo: "IEPS137", nombre: "TEORÍAS COGNITIVO-CONDUCTUALES", semestre: 5, requisitos: ["IEPS022"] },
  { codigo: "IEPS142", nombre: "TEORÍA HUMANISTA", semestre: 5, requisitos: ["IEPS022"] },

  // Año 3 - Semestre 6
  { codigo: "ELECT21", nombre: "OPTATIVO PROFESIONAL 2", semestre: 6 },
  { codigo: "IEPS152", nombre: "EVALUACIÓN PSICOLÓGICA II", semestre: 6, requisitos: ["IEPS127", "IEPS132"] },
  { codigo: "IEPS157", nombre: "PSIQUIATRÍA", semestre: 6, requisitos: ["IEPS132"] },
  { codigo: "IEPS162", nombre: "TEORÍA SISTÉMICA", semestre: 6, requisitos: ["IEPS022"] },
  { codigo: "IEPS167", nombre: "TEORÍA PSICOANALÍTICA", semestre: 6, requisitos: ["IEPS022"] },
  { codigo: "IEPS172", nombre: "TÉCNICAS DE INVESTIGACIÓN E INTERVENCIÓN", semestre: 6, requisitos: ["ICED157"] },

  // Año 4 - Semestre 7
  { codigo: "ELECT22", nombre: "OPTATIVO PROFESIONAL 3", semestre: 7 },
  { codigo: "IEPS177", nombre: "PSICOLOGÍA CLÍNICA ADULTOS", semestre: 7, requisitos: ["IEPS152", "IEPS157"] },
  { codigo: "IEPS182", nombre: "PSICOLOGÍA ORGANIZACIONAL I", semestre: 7, requisitos: ["IEPS112"] },
  { codigo: "IEPS197", nombre: "PSICOLOGÍA COMUNITARIA I", semestre: 7, requisitos: ["IEPS112"] },
  { codigo: "IEPS202", nombre: "PSICOLOGÍA EDUCACIONAL I", semestre: 7, requisitos: ["IEPS082"] },
  { codigo: "IEPS207", nombre: "DESARROLLO DE COMPETENCIAS LABORALES Y EMPRENDIMIENTO", semestre: 7 },

  // Año 4 - Semestre 8
  { codigo: "ELECT23", nombre: "OPTATIVO PROFESIONAL 4", semestre: 8 },
  { codigo: "IEPS212", nombre: "PSICOLOGÍA CLÍNICA INFANTO-JUVENIL", semestre: 8, requisitos: ["IEPS152", "IEPS157"] },
  { codigo: "IEPS217", nombre: "PSICOLOGÍA ORGANIZACIONAL II", semestre: 8, requisitos: ["IEPS182"] },
  { codigo: "IEPS222", nombre: "PSICOLOGÍA COMUNITARIA II", semestre: 8, requisitos: ["IEPS197"] },
  { codigo: "IEPS227", nombre: "PSICOLOGÍA EDUCACIONAL II", semestre: 8, requisitos: ["IEPS202"] },
  { codigo: "IEPS232", nombre: "SEMINARIO DE LICENCIATURA", semestre: 8, requisitos: ["IEPS172"] },

  // Año 5 - Semestre 9
  { codigo: "EPSV258", nombre: "TALLER DE ESPECIALIZACIÓN I", semestre: 9, requisitos: ["ALL"] },
  { codigo: "EPSV294", nombre: "PRÁCTICA PROFESIONAL I", semestre: 9, requisitos: ["ALL"] },
  { codigo: "EPSV297", nombre: "SEMINARIO DE TITULACIÓN I", semestre: 9, requisitos: ["ALL"] },

  // Año 5 - Semestre 10
  { codigo: "EPSV260", nombre: "TALLER DE ESPECIALIZACIÓN II", semestre: 10, requisitos: ["EPSV258"] },
  { codigo: "EPSV295", nombre: "PRÁCTICA PROFESIONAL II", semestre: 10, requisitos: ["EPSV294"] },
  { codigo: "EPSV299", nombre: "SEMINARIO DE TITULACIÓN II", semestre: 10, requisitos: ["EPSV297"] }
];

const container = document.getElementById("malla-container");
const totalSemestres = 10;
const aprobadas = new Set();

function crearSemestres() {
  for (let i = 1; i <= totalSemestres; i++) {
    const col = document.createElement("div");
    col.className = "semestre";
    col.id = `sem${i}`;
    col.innerHTML = `<h3>Semestre ${i}</h3>`;
    container.appendChild(col);
  }
}

function renderMaterias() {
  materias.forEach(m => {
    const div = document.createElement("div");
    div.className = "materia bloqueada";
    div.innerText = `${m.codigo}: ${m.nombre}`;
    div.dataset.codigo = m.codigo;

    if (!m.requisitos || m.requisitos.length === 0) {
      div.classList.remove("bloqueada");
      div.classList.add("desbloqueada");
    }

    div.addEventListener("click", () => toggleMateria(m, div));
    document.getElementById(`sem${m.semestre}`).appendChild(div);
  });
}

function toggleMateria(materia, div) {
  const cod = materia.codigo;
  if (aprobadas.has(cod)) {
    aprobadas.delete(cod);
    div.classList.remove("tachada");
  } else {
    aprobadas.add(cod);
    div.classList.add("tachada");
  }
  actualizarDisponibles();
}

function actualizarDisponibles() {
  document.querySelectorAll(".materia").forEach(div => {
    const cod = div.dataset.codigo;
    const mat = materias.find(m => m.codigo === cod);

    if (!mat.requisitos || mat.requisitos.every(r => aprobadas.has(r))) {
      div.classList.remove("bloqueada");
      div.classList.add("desbloqueada");
    } else {
      div.classList.remove("desbloqueada");
      if (!aprobadas.has(cod)) div.classList.add("bloqueada");
    }
  });
}

crearSemestres();
renderMaterias();
