import { Component, OnInit } from '@angular/core';
import { GestionUsuariosService } from '../servicios/gestion-usuarios.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule, CommonModule], // Añadir FormsModule a los imports
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil = {
    nombre: '',
    correo: '',
    contrasena: '',
    rol: ''
  };

  constructor(private gestionUsuariosService: GestionUsuariosService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerPerfil();
  }

  // Obtener la información del perfil del usuario
  obtenerPerfil(): void {
    this.gestionUsuariosService.obtenerPerfil().subscribe(
      (data) => {
        this.perfil = data;
      },
      (error) => {
        console.error('Error al obtener el perfil:', error);
      }
    );
  }

  // Modificar la información del perfil del usuario
  modificarPerfil(): void {
    this.gestionUsuariosService.modificarPerfil(this.perfil).subscribe(
      (data) => {
        console.log('Perfil modificado con éxito:', data);
        alert('Perfil modificado con éxito');
        this.router.navigate(['/inicio']);
      },
      (error) => {
        console.error('Error al modificar el perfil:', error);
        alert('Ocurrió un error al modificar el perfil');
      }
    );
  }
}
