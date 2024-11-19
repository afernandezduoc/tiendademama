import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tienda de Mamá';

  usuarioActual: any;

  ngOnInit(): void {
    // Simulación de autenticación
    this.usuarioActual = {
      nombre: 'Admin User',
      rol: 'ADMIN' 
    };
  }
}
