import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GestionUsuariosService } from '../servicios/gestion-usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  iniciarSesion(): void {
    this.gestionUsuariosService.iniciarSesion(this.usuario).subscribe(
      (data) => {
        this.gestionUsuariosService.establecerUsuarioActual(data);
        console.log('Inicio de sesión exitoso:', data);
        this.router.navigate(['/listado-productos']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.mensajeError = 'Correo o contraseña incorrectos';
      }
    );
  }
}
