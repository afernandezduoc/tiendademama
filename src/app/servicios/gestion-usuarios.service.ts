import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionUsuariosService {
  private apiUrl = 'http://localhost:8081/api/usuarios';
  private usuarioActual: any = null; 

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  obtenerUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Obtener un usuario por ID
  obtenerUsuarioPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo usuario
  crearUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, usuario);
  }

  // Actualizar un usuario existente
  actualizarUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, usuario);
  }

  // Eliminar un usuario
  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Método para recuperar la contraseña
  recuperarContrasena(correo: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/recuperar-contrasena`, { correo });
  }

  // Obtener la información del perfil del usuario
  obtenerPerfil(): Observable<any> {
    return this.http.get(`${this.apiUrl}/perfil`);
  }

  // Modificar la información del perfil del usuario
  modificarPerfil(perfil: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/perfil`, perfil);
  }

  // Método para iniciar sesión
  iniciarSesion(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, usuario);
  }

  // Método para establecer el usuario actual tras el inicio de sesión
  establecerUsuarioActual(usuario: any): void {
    this.usuarioActual = usuario;
  }

  // Método para obtener el usuario actual
  obtenerUsuarioActual(): any {
    return this.usuarioActual;
  }
}
