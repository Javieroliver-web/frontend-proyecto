import { Routes } from '@angular/router';

// 1. Importa el componente de Layout (el "caparazón")
import { MainLayout } from './layouts/main-layout/main-layout';

// 2. Importa tus 4 componentes de página
import { DashboardComponent } from './pages/dashboard/dashboard';
import { BoardComponent } from './pages/board/board';
import { ProjectListComponent } from './pages/project-list/project-list';
import { CalendarComponent } from './pages/calendar/calendar';

// (Opcional: Si creas la página de Login, la importarías aquí)
// import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  
  // --- Rutas que SÍ usan la Sidebar y el Header ---
  {
    path: '',
    component: MainLayout, // Carga el layout
    children: [
      // Si el path está vacío ('/'), redirige a '/dashboard'
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      
      // Define las 4 vistas que se cargarán DENTRO del layout
      { path: 'dashboard', component: DashboardComponent },     // Vista 1
      { path: 'board', component: BoardComponent },         // Vista 2
      { path: 'list', component: ProjectListComponent },     // Vista 3
      { path: 'calendar', component: CalendarComponent }     // Vista 4
    ]
  },

  // --- Rutas que NO usan el Layout (como Login) irían aquí ---
  // { path: 'login', component: LoginComponent }
  
];