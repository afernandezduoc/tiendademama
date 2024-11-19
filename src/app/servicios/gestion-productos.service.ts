import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionProductosService {
  private apiUrl = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  obtenerProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Obtener un producto por ID
  obtenerProductoPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo producto
  crearProducto(producto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, producto);
  }

  // Actualizar un producto existente
  actualizarProducto(id: number, producto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  // Eliminar un producto
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}