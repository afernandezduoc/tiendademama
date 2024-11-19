import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];  // Array para almacenar los productos en el carrito

  // Agregar un producto al carrito
  agregarProducto(producto: any): void {
    this.carrito.push(producto);
    console.log('Producto agregado al carrito:', producto);
  }

  // Obtener los productos del carrito
  obtenerCarrito(): any[] {
    return this.carrito;
  }

  // Vaciar el carrito
  vaciarCarrito(): void {
    this.carrito = [];
  }
}
