import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionUsuariosService } from '../servicios/gestion-usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = {
    correo: '',
    contrasena: ''
  };
  mensajeError = '';

  constructor(private gestionUsuariosService: GestionUsuariosService, private router: Router) {}

  iniciarSesion(): void {
    this.gestionUsuariosService.obtenerUsuarios().subscribe(
      (usuarios) => {
        const usuarioValido = usuarios.find((u: any) => u.correo === this.usuario.correo && u.contrasena === this.usuario.contrasena);
        if (usuarioValido) {
          // Redirigir al usuario al inicio
          this.router.navigate(['/inicio']);
        } else {
          // Mostrar mensaje de error
          this.mensajeError = 'Correo o contraseña incorrectos';
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.mensajeError = 'Ha ocurrido un error al intentar iniciar sesión. Inténtelo nuevamente más tarde.';
      }
    );
  }
}