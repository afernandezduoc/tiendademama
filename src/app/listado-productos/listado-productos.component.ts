import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionProductosService } from '../servicios/gestion-productos.service';
import { CarritoService } from '../servicios/carrito.service'; // Servicio para el carrito de compras

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  productos: any[] = [];  // Array para almacenar los productos

  constructor(
    private gestionProductosService: GestionProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  // Obtener la lista de productos
  obtenerProductos(): void {
    this.gestionProductosService.obtenerProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  // Agregar un producto al carrito de compras
  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarProducto(producto);
    alert('Producto agregado al carrito');
  }
}
