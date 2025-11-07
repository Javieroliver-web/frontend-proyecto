import { Component } from '@angular/core';

// 1. Importa los componentes que vas a usar
import { Header } from '../../components/header/header';
import { Sidebar } from '../../components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router'; // <-- Importante para <router-outlet>

@Component({
  selector: 'app-main-layout',
  standalone: true,
  
  // 2. Añádelos al array de 'imports'
  imports: [
    Header,
    Sidebar,
    RouterOutlet
  ],
  
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css']
})
export class MainLayout {

}