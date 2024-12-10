import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GestionProductosService } from './gestion-productos.service';

describe('GestionProductosService', () => {
  let service: GestionProductosService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8080/productos';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GestionProductosService]
    });
    service = TestBed.inject(GestionProductosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no haya peticiones pendientes
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener todos los productos (GET)', () => {
    const dummyProducts = [
      { id: 1, nombre: 'Producto 1' },
      { id: 2, nombre: 'Producto 2' }
    ];

    service.obtenerProductos().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products).toEqual(dummyProducts);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts);
  });

  it('debería obtener un producto por id (GET)', () => {
    const dummyProduct = { id: 1, nombre: 'Producto 1' };

    service.obtenerProductoPorId(1).subscribe(product => {
      expect(product).toEqual(dummyProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProduct);
  });

  it('debería crear un producto (POST)', () => {
    const newProduct = { nombre: 'Producto Nuevo' };
    const responseProduct = { id: 3, nombre: 'Producto Nuevo' };

    service.crearProducto(newProduct).subscribe(product => {
      expect(product).toEqual(responseProduct);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newProduct);
    req.flush(responseProduct);
  });

  it('debería actualizar un producto (PUT)', () => {
    const updatedProduct = { id: 1, nombre: 'Producto Actualizado' };

    service.actualizarProducto(1, updatedProduct).subscribe(product => {
      expect(product).toEqual(updatedProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedProduct);
    req.flush(updatedProduct);
  });

  it('debería eliminar un producto (DELETE)', () => {
    service.eliminarProducto(1).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ success: true });
  });
});
