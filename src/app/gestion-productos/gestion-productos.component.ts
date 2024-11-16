import { Component, OnInit, Injector  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionProductosService } from '../servicios/gestion-productos.service';

@Component({
  selector: 'app-gestion-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-productos.component.html',
  styleUrl: './gestion-productos.component.css'
})
export class GestionProductosComponent implements OnInit {
  productos: any[] = [];  // Array para almacenar los productos
  nuevoProducto = {
    nombre: '',
    precio: null,
    stock: null
  };

  private gestionProductosService!: GestionProductosService;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.gestionProductosService = this.injector.get(GestionProductosService);
    // Obtener todos los productos al iniciar el componente
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

  // Crear un nuevo producto
crearProducto(): void {
  this.gestionProductosService.crearProducto(this.nuevoProducto).subscribe(
    (data) => {
      this.productos.push(data);
      // Reiniciar el objeto nuevoProducto con la estructura original
      this.nuevoProducto = {
        nombre: '',
        precio: null,
        stock: null
      };
    },
    (error) => {
      console.error('Error al crear producto:', error);
    }
  );
}


  // Actualizar un producto existente
  actualizarProducto(producto: any): void {
    this.gestionProductosService.actualizarProducto(producto.id, producto).subscribe(
      (data) => {
        // Actualizar la lista de productos con el producto actualizado
        const index = this.productos.findIndex(p => p.id === data.id);
        if (index !== -1) {
          this.productos[index] = data;
        }
      },
      (error) => {
        console.error('Error al actualizar producto:', error);
      }
    );
  }

  // Eliminar un producto
  eliminarProducto(id: number): void {
    this.gestionProductosService.eliminarProducto(id).subscribe(
      () => {
        // Eliminar el producto del array localmente
        this.productos = this.productos.filter(p => p.id !== id);
      },
      (error) => {
        console.error('Error al eliminar producto:', error);
      }
    );
  }
}