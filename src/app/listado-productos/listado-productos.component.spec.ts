import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoProductosComponent } from './listado-productos.component';

describe('ListadoProductosComponent', () => {
  let component: ListadoProductosComponent;
  let fixture: ComponentFixture<ListadoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoProductosComponent] // Si es standalone, aquí va en imports
    }).compileComponents();
  });
  

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined productos array', () => {
    expect(component.productos).toBeDefined();
    expect(Array.isArray(component.productos)).toBeTrue();
  });

  it('should render products in the template', () => {
    component.productos = [
      { id: 1, nombre: 'Producto 1', precio: 100 },
      { id: 2, nombre: 'Producto 2', precio: 200 },
    ];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.card').length).toBe(2);
  });
});
