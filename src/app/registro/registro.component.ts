import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionUsuariosService } from '../servicios/gestion-usuarios.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nuevoUsuario = {
    nombre: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: ''
  };

  constructor(private gestionUsuariosService: GestionUsuariosService) {}

  // Registrar un nuevo usuario
  registrarUsuario(): void {
    if (this.nuevoUsuario.contrasena !== this.nuevoUsuario.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const usuario = {
      nombre: this.nuevoUsuario.nombre,
      correo: this.nuevoUsuario.correo,
      contrasena: this.nuevoUsuario.contrasena
    };

    this.gestionUsuariosService.crearUsuario(usuario).subscribe(
      (data) => {
        alert('Usuario registrado exitosamente');
        this.nuevoUsuario = {
          nombre: '',
          correo: '',
          contrasena: '',
          confirmarContrasena: ''
        };
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }
}