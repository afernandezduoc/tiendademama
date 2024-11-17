import { Component, OnInit, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionUsuariosService } from '../servicios/gestion-usuarios.service';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent implements OnInit {
  usuarios: any[] = [];  // Array para almacenar los usuarios
  nuevoUsuario = {
    nombre: '',
    correo: '',
    rol: ''
  };
  roles = ['Admin', 'User']; // Roles posibles para el usuario

  private gestionUsuariosService!: GestionUsuariosService;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.gestionUsuariosService = this.injector.get(GestionUsuariosService);
    // Obtener todos los productos al iniciar el componente
    this.obtenerUsuarios();
  }

  // Obtener la lista de usuarios
  obtenerUsuarios(): void {
    this.gestionUsuariosService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  // Crear un nuevo usuario
  crearUsuario(): void {
    this.gestionUsuariosService.crearUsuario(this.nuevoUsuario).subscribe(
      (data) => {
        this.usuarios.push(data);
        // Reiniciar el objeto nuevoUsuario con la estructura original
        this.nuevoUsuario = {
          nombre: '',
          correo: '',
          rol: ''
        };
      },
      (error) => {
        console.error('Error al crear usuario:', error);
      }
    );
  }

  // Actualizar un usuario existente
  actualizarUsuario(usuario: any): void {
    this.gestionUsuariosService.actualizarUsuario(usuario.id, usuario).subscribe(
      (data) => {
        // Actualizar la lista de usuarios con el usuario actualizado
        const index = this.usuarios.findIndex(u => u.id === data.id);
        if (index !== -1) {
          this.usuarios[index] = data;
        }
      },
      (error) => {
        console.error('Error al actualizar usuario:', error);
      }
    );
  }

  // Eliminar un usuario
  eliminarUsuario(id: number): void {
    this.gestionUsuariosService.eliminarUsuario(id).subscribe(
      () => {
        // Eliminar el usuario del array localmente
        this.usuarios = this.usuarios.filter(u => u.id !== id);
      },
      (error) => {
        console.error('Error al eliminar usuario:', error);
      }
    );
  }
}
