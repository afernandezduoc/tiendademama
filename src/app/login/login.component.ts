import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GestionUsuariosService } from '../servicios/gestion-usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Añadir FormsModule y CommonModule a los imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = {
    correo: '',
    contrasena: ''
  };
  mensajeError = '';

  constructor(private gestionUsuariosService: GestionUsuariosService, private router: Router) {}

  // Método para iniciar sesión
  iniciarSesion(): void {
    this.gestionUsuariosService.iniciarSesion(this.usuario.correo, this.usuario.contrasena).subscribe(
      (data) => {
        console.log('Inicio de sesión exitoso:', data);
        this.router.navigate(['/inicio']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.mensajeError = 'Correo o contraseña incorrectos';
      }
    );
  }
}
