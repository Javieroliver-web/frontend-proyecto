import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Proyecto {
  id: number;
  nombre: string;
  estado: string;
  descripcion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // Base de datos ficticia
  private projectsData = {
    '1': { 
      id: '1', 
      name: 'Proyecto 1', 
      icon: '📦',
      summary: { porHacer: 2, enCurso: 1, listo: 1 },
      tasks: {
        porHacer: [ { id: 't1', title: 'Organizar inventario' } ],
        enCurso: [],
        listo: []
      }
    },
    '2': { 
      id: '2', 
      name: 'Proyecto 2', 
      icon: '🚀',
      summary: { porHacer: 5, enCurso: 2, listo: 8 },
      tasks: {
        porHacer: [ { id: 't3', title: 'Definir Sprints' }, { id: 't4', title: 'Crear mockups' } ],
        enCurso: [ { id: 't5', title: 'Desarrollar login' } ],
        listo: []
      }
    },
    '3': { 
      id: '3', 
      name: 'Proyecto 3', 
      icon: '📈', // Icono de tu project-list.html
      summary: { porHacer: 1, enCurso: 1, listo: 1 }, // Datos de ejemplo
      tasks: {
        porHacer: [ { id: 't6', title: 'Revisar métricas' } ],
        enCurso: [ { id: 't7', title: 'Preparar informe' } ],
        listo: []
      }
    }
  };

  constructor() { }

  // Método para obtener todos los proyectos
  getProyectos(): Observable<Proyecto[]> {
    // En una app real, esto sería una llamada http.get()
    const proyectos: Proyecto[] = [
      { id: 1, nombre: 'Proyecto 1', estado: 'activo', descripcion: 'Proyecto de inventario' },
      { id: 2, nombre: 'Proyecto 2', estado: 'enCurso', descripcion: 'Proyecto de desarrollo' },
      { id: 3, nombre: 'Proyecto 3', estado: 'planificado', descripcion: 'Proyecto de análisis' }
    ];
    return of(proyectos);
  }

  // Método para obtener un proyecto por su ID
  getProyecto(id: number): Observable<Proyecto> {
    // En una app real, esto sería una llamada http.get()
    const proyecto: Proyecto = {
      id,
      nombre: `Proyecto ${id}`,
      estado: 'activo',
      descripcion: `Descripción del proyecto ${id}`
    };
    return of(proyecto);
  }

  // Método para obtener un proyecto por su ID (versión string)
  getProjectById(id: string) {
    // En una app real, esto sería una llamada http.get()
    return (this.projectsData as any)[id];
  }

  // Método para eliminar un proyecto
  eliminarProyecto(id: number): Observable<void> {
    // En una app real: return this.http.delete<void>(`${this.apiUrl}/${id}`);
    return of(undefined);
  }
}