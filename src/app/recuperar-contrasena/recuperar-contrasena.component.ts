import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionUsuariosService } from '../servicios/gestion-usuarios.service';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {
  correo = '';

  constructor(private gestionUsuariosService: GestionUsuariosService) {}

  // Enviar solicitud de recuperación de contraseña
  onRecuperarContrasena(): void {
    if (!this.correo) {
      alert('Por favor, ingrese un correo electrónico');
      return;
    }

    this.gestionUsuariosService.recuperarContrasena(this.correo).subscribe(
      () => {
        alert('Se ha enviado un correo con las instrucciones para recuperar la contraseña');
        this.correo = '';
      },
      (error) => {
        console.error('Error al recuperar la contraseña:', error);
      }
    );
  }
}