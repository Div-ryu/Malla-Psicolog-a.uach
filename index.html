import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card"
import { Info, ChevronDown, ChevronUp, Check, X } from "lucide-react"

// Datos completos de todas las materias
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
  2: [
    { codigo: "CIDI048", nombre: "INGLÉS II", prereq: "CIDI042" },
    { codigo: "CIDI082", nombre: "COMUNICACIÓN ORAL Y ESCRITA", prereq: null },
    { codigo: "ELECT13", nombre: "OFG 2", prereq: null },
    { codigo: "IEPS065", nombre: "PROCESOS PSICOLÓGICOS", prereq: "IEPS022" },
    { codigo: "IEPS072", nombre: "PROCESOS SOCIALES", prereq: null },
    { codigo: "IEPS077", nombre: "PSICOFISIOLOGÍA", prereq: "IEPS027" }
  ],
  3: [
    { codigo: "ELECT16", nombre: "OFG 3", prereq: null },
    { codigo: "IEPS082", nombre: "PSICOLOGÍA DEL APRENDIZAJE", prereq: "IEPS022" },
    { codigo: "IEPS087", nombre: "CICLO VITAL I", prereq: null },
    { codigo: "IEPS092", nombre: "PSICOLOGÍA SOCIAL I", prereq: "IEPS072" },
    { codigo: "IEPS097", nombre: "METODOLOGÍA DE INVESTIGACIÓN CUANTITATIVA I", prereq: null },
    { codigo: "IEPS099", nombre: "DESARROLLO DE COMPETENCIAS ACADÉMICAS", prereq: null }
  ],
  4: [
    { codigo: "ELECT95", nombre: "OFG 4", prereq: null },
    { codigo: "IEPS102", nombre: "PSICOLOGÍA DE LA PERSONALIDAD", prereq: "IEPS087, IEPS065" },
    { codigo: "IEPS107", nombre: "CICLO VITAL II", prereq: "IEPS087" },
    { codigo: "IEPS112", nombre: "PSICOLOGÍA SOCIAL II", prereq: "IEPS092" },
    { codigo: "IEPS117", nombre: "METODOLOGÍA DE INVESTIGACIÓN CUANTITATIVA II", prereq: "IEPS097" },
    { codigo: "IEPS122", nombre: "TALLER DE VINCULACIÓN CON EL MEDIO", prereq: "IEPS099" }
  ],
  5: [
    { codigo: "ELECT20", nombre: "OPTATIVO PROFESIONAL 1", prereq: null },
    { codigo: "ICED157", nombre: "METODOLOGÍA DE INVESTIGACIÓN CUALITATIVA", prereq: null },
    { codigo: "IEPS127", nombre: "EVALUACIÓN PSICOLÓGICA I", prereq: "IEPS065" },
    { codigo: "IEPS132", nombre: "PSICOPATOLOGÍA", prereq: "IEPS077, IEPS102" },
    { codigo: "IEPS137", nombre: "TEORÍAS COGNITIVO-CONDUCTUALES", prereq: "IEPS022" },
    { codigo: "IEPS142", nombre: "TEORÍA HUMANISTA", prereq: "IEPS022" }
  ],
  6: [
    { codigo: "ELECT21", nombre: "OPTATIVO PROFESIONAL 2", prereq: null },
    { codigo: "IEPS152", nombre: "EVALUACIÓN PSICOLÓGICA II", prereq: "IEPS127, IEPS132" },
    { codigo: "IEPS157", nombre: "PSIQUIATRÍA", prereq: "IEPS132" },
    { codigo: "IEPS162", nombre: "TEORÍA SISTÉMICA", prereq: "IEPS022" },
    { codigo: "IEPS167", nombre: "TEORÍA PSICOANALÍTICA", prereq: "IEPS022" },
    { codigo: "IEPS172", nombre: "TÉCNICAS DE INVESTIGACIÓN E INTERVENCIÓN", prereq: "ICED157" }
  ],
  7: [
    { codigo: "ELECT22", nombre: "OPTATIVO PROFESIONAL 3", prereq: null },
    { codigo: "IEPS177", nombre: "PSICOLOGÍA CLÍNICA ADULTOS", prereq: "IEPS152, IEPS157" },
    { codigo: "IEPS182", nombre: "PSICOLOGÍA ORGANIZACIONAL I", prereq: "IEPS112" },
    { codigo: "IEPS197", nombre: "PSICOLOGÍA COMUNITARIA I", prereq: "IEPS112" },
    { codigo: "IEPS202", nombre: "PSICOLOGÍA EDUCACIONAL I", prereq: "IEPS082" },
    { codigo: "IEPS207", nombre: "DESARROLLO DE COMPETENCIAS LABORALES Y EMPRENDIMIENTO", prereq: null }
  ],
  8: [
    { codigo: "ELECT23", nombre: "OPTATIVO PROFESIONAL 4", prereq: null },
    { codigo: "IEPS212", nombre: "PSICOLOGÍA CLÍNICA INFANTO-JUVENIL", prereq: "IEPS152, IEPS157" },
    { codigo: "IEPS217", nombre: "PSICOLOGÍA ORGANIZACIONAL II", prereq: "IEPS182" },
    { codigo: "IEPS222", nombre: "PSICOLOGÍA COMUNITARIA II", prereq: "IEPS197" },
    { codigo: "IEPS227", nombre: "PSICOLOGÍA EDUCACIONAL II", prereq: "IEPS202" },
    { codigo: "IEPS232", nombre: "SEMINARIO DE LICENCIATURA", prereq: "IEPS172" }
  ],
  9: [
    { codigo: "EPSV258", nombre: "TALLER DE ESPECIALIZACIÓN I", prereq: "TODAS LAS MATERIAS ANTERIORES" },
    { codigo: "EPSV294", nombre: "PRÁCTICA PROFESIONAL I", prereq: "TODAS LAS MATERIAS ANTERIORES" },
    { codigo: "EPSV297", nombre: "SEMINARIO DE TITULACIÓN I", prereq: "TODAS LAS MATERIAS ANTERIORES" }
  ],
  10: [
    { codigo: "EPSV260", nombre: "TALLER DE ESPECIALIZACIÓN II", prereq: "EPSV258" },
    { codigo: "EPSV295", nombre: "PRÁCTICA PROFESIONAL II", prereq: "EPSV294" },
    { codigo: "EPSV299", nombre: "SEMINARIO DE TITULACIÓN II", prereq: "EPSV297" }
  ]
}

export default function PlanAcademicoCompleto() {
  const [completedCourses, setCompletedCourses] = useState<Record<string, boolean>>({})
  const [expandedYears, setExpandedYears] = useState<Record<number, boolean>>({
    1: true, 2: true, 3: true, 4: true, 5: true
  })
  const [expandedSemesters, setExpandedSemesters] = useState<Record<string, boolean>>({})
  const [expandedPrereqs, setExpandedPrereqs] = useState<Record<string, boolean>>({})

  const toggleCourseCompletion = (codigo: string) => {
    setCompletedCourses(prev => ({
      ...prev,
      [codigo]: !prev[codigo]
    }))
  }

  const toggleYear = (year: number) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }))
  }

  const toggleSemester = (year: number, semesterIndex: number) => {
    const key = `${year}-${semesterIndex}`
    setExpandedSemesters(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const togglePrereq = (codigo: string) => {
    setExpandedPrereqs(prev => ({
      ...prev,
      [codigo]: !prev[codigo]
    }))
  }

  const getSemesterNumber = (year: number, semesterIndex: number) => {
    return (year - 1) * 2 + semesterIndex + 1
  }

  const findCourseByCode = (codigo: string) => {
    for (const sem in materiasPorSemestre) {
      const course = materiasPorSemestre[sem].find(c => c.codigo === codigo)
      if (course) return { ...course, semester: parseInt(sem) }
    }
    return null
  }

  // Verificar si un curso puede ser marcado como completado (tiene prerequisitos cumplidos)
  const canCompleteCourse = (codigo: string) => {
    const course = findCourseByCode(codigo)
    if (!course || !course.prereq) return true
    
    const prereqs = course.prereq.split(',').map(s => s.trim())
    return prereqs.every(prereq => {
      if (prereq === "TODAS LAS MATERIAS ANTERIORES") {
        // Verificar todas las materias de semestres anteriores
        const currentSemester = findCourseByCode(codigo)?.semester || 11
        for (let sem = 1; sem < currentSemester; sem++) {
          if (materiasPorSemestre[sem]) {
            for (const materia of materiasPorSemestre[sem]) {
              if (!completedCourses[materia.codigo]) return false
            }
          }
        }
        return true
      }
      return completedCourses[prereq]
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 overflow-x-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 sticky left-0">
        Plan Académico de Psicología
        <span className="text-sm font-normal ml-4 text-gray-500">
          {Object.values(completedCourses).filter(Boolean).length} de {Object.values(materiasPorSemestre).flat().length} materias completadas
        </span>
      </h1>
      
      <div className="flex space-x-6 pb-4" style={{ minWidth: 'max-content' }}>
        {[1, 2, 3, 4, 5].map((year) => (
          <div key={year} className="flex flex-col w-72 flex-shrink-0">
            <Card className="shadow-md h-full">
              <CardHeader 
                className={`${getYearColor(year)} text-white rounded-t-lg cursor-pointer`}
                onClick={() => toggleYear(year)}
              >
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">
                    {getYearName(year)}
                  </CardTitle>
                  {expandedYears[year] ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </CardHeader>
              
              {expandedYears[year] && (
                <CardContent className="p-0 overflow-y-auto" style={{ maxHeight: '70vh' }}>
                  <div className="p-4 space-y-4">
                    {[0, 1].map((semesterIndex) => {
                      const semesterNumber = getSemesterNumber(year, semesterIndex)
                      const semesterKey = `${year}-${semesterIndex}`
                      return (
                        <div 
                          key={semesterIndex} 
                          className={`${getSemesterColor(year)} p-3 rounded-md`}
                        >
                          <div 
                            className="flex justify-between items-center cursor-pointer mb-2"
                            onClick={() => toggleSemester(year, semesterIndex)}
                          >
                            <h3 className="font-medium flex items-center">
                              <span className="mr-2">★</span> 
                              Semestre {semesterNumber}
                            </h3>
                            {expandedSemesters[semesterKey] ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </div>
                          
                          {expandedSemesters[semesterKey] && (
                            <ul className="space-y-2">
                              {materiasPorSemestre[semesterNumber]?.map((materia, index) => {
                                const canComplete = canCompleteCourse(materia.codigo)
                                return (
                                  <li key={index}>
                                    <div 
                                      className={`text-sm p-2 rounded flex justify-between items-start transition-colors ${
                                        completedCourses[materia.codigo] 
                                          ? 'bg-green-50 line-through text-gray-500' 
                                          : canComplete 
                                            ? 'hover:bg-gray-100 cursor-pointer' 
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                      }`}
                                      onClick={(e) => {
                                        if (!canComplete) return
                                        e.stopPropagation()
                                        toggleCourseCompletion(materia.codigo)
                                      }}
                                    >
                                      <div>
                                        <div className="font-medium">
                                          {materia.codigo}: {materia.nombre}
                                          {completedCourses[materia.codigo] && (
                                            <Check className="h-4 w-4 text-green-500 inline ml-2" />
                                          )}
                                        </div>
                                        {materia.prereq && (
                                          <div 
                                            className="text-xs text-gray-500 flex items-start mt-1 cursor-pointer"
                                            onClick={(e) => {
                                              e.stopPropagation()
                                              togglePrereq(materia.codigo)
                                            }}
                                          >
                                            <Info className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                                            <span>
                                              Pre: {materia.prereq}
                                              {expandedPrereqs[materia.codigo] ? (
                                                <ChevronUp className="h-3 w-3 inline ml-1" />
                                              ) : (
                                                <ChevronDown className="h-3 w-3 inline ml-1" />
                                              )}
                                            </span>
                                          </div>
                                        )}
                                      </div>
                                      <button 
                                        className={`ml-2 ${canComplete ? 'text-gray-400 hover:text-gray-600' : 'text-gray-300'}`}
                                        onClick={(e) => {
                                          if (!canComplete) return
                                          e.stopPropagation()
                                          toggleCourseCompletion(materia.codigo)
                                        }}
                                        disabled={!canComplete}
                                      >
                                        {completedCourses[materia.codigo] ? (
                                          <X className="h-4 w-4 text-red-500" />
                                        ) : (
                                          <Check className="h-4 w-4" />
                                        )}
                                      </button>
                                    </div>

                                    {expandedPrereqs[materia.codigo] && materia.prereq && (
                                      <div className="ml-4 mt-2 pl-2 border-l-2 border-gray-200">
                                        {materia.prereq.split(/ y |,/).map((req, i) => {
                                          const cleanReq = req.trim()
                                          if (cleanReq === "TODAS LAS MATERIAS ANTERIORES") {
                                            return (
                                              <div key={i} className="text-xs p-2 mb-1 rounded bg-gray-50">
                                                Todas las materias de semestres anteriores deben estar completadas
                                              </div>
                                            )
                                          }
                                          const course = findCourseByCode(cleanReq)
                                          return course ? (
                                            <div 
                                              key={i}
                                              className={`text-xs p-2 mb-1 rounded flex justify-between items-center ${
                                                completedCourses[course.codigo] 
                                                  ? 'bg-green-50 line-through text-gray-500' 
                                                  : 'bg-gray-50 hover:bg-gray-100 cursor-pointer'
                                              }`}
                                              onClick={(e) => {
                                                e.stopPropagation()
                                                toggleCourseCompletion(course.codigo)
                                              }}
                                            >
                                              <span>
                                                {course.codigo}: {course.nombre} (Sem. {course.semester})
                                              </span>
                                              {completedCourses[course.codigo] && (
                                                <Check className="h-3 w-3 text-green-500" />
                                              )}
                                            </div>
                                          ) : (
                                            <div key={i} className="text-xs p-2 mb-1 rounded bg-gray-50">
                                              {cleanReq} (no encontrado)
                                            </div>
                                          )
                                        })}
                                      </div>
                                    )}
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

// Funciones auxiliares
function getYearName(year: number): string {
  const names = [
    "Primer Año",
    "Segundo Año",
    "Tercer Año",
    "Cuarto Año",
    "Quinto Año"
  ]
  return names[year - 1] || `Año ${year}`
}

function getYearColor(year: number): string {
  const colors = [
    "bg-blue-600",
    "bg-green-600",
    "bg-yellow-600",
    "bg-purple-600",
    "bg-red-600"
  ]
  return colors[year - 1] || "bg-gray-600"
}

function getSemesterColor(year: number): string {
  const colors = [
    "bg-blue-50",
    "bg-green-50",
    "bg-yellow-50",
    "bg-purple-50",
    "bg-red-50"
  ]
  return colors[year - 1] || "bg-gray-50"
}
