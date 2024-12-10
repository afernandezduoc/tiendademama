import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GestionUsuariosService } from './gestion-usuarios.service';

describe('GestionUsuariosService', () => {
  let service: GestionUsuariosService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8081/api/usuarios';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GestionUsuariosService]
    });
    service = TestBed.inject(GestionUsuariosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener todos los usuarios (GET)', () => {
    const dummyUsers = [
      { id: 1, nombre: 'User1' },
      { id: 2, nombre: 'User2' }
    ];

    service.obtenerUsuarios().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });

  it('debería obtener un usuario por id (GET)', () => {
    const dummyUser = { id: 1, nombre: 'User1' };

    service.obtenerUsuarioPorId(1).subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });

  it('debería crear un usuario (POST)', () => {
    const newUser = { nombre: 'Nuevo User' };
    const responseUser = { id: 3, nombre: 'Nuevo User' };

    service.crearUsuario(newUser).subscribe(user => {
      expect(user).toEqual(responseUser);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newUser);
    req.flush(responseUser);
  });

  it('debería actualizar un usuario (PUT)', () => {
    const updatedUser = { id: 1, nombre: 'User Actualizado' };

    service.actualizarUsuario(1, updatedUser).subscribe(user => {
      expect(user).toEqual(updatedUser);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedUser);
    req.flush(updatedUser);
  });

  it('debería eliminar un usuario (DELETE)', () => {
    service.eliminarUsuario(1).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ success: true });
  });

  it('debería recuperar contraseña (POST)', () => {
    const correo = 'test@example.com';
    const response = { message: 'Correo enviado' };

    service.recuperarContrasena(correo).subscribe(res => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne(`${apiUrl}/recuperar-contrasena`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ correo });
    req.flush(response);
  });

  it('debería obtener el perfil (GET)', () => {
    const profile = { id: 1, nombre: 'Perfil User' };

    service.obtenerPerfil().subscribe(res => {
      expect(res).toEqual(profile);
    });

    const req = httpMock.expectOne(`${apiUrl}/perfil`);
    expect(req.request.method).toBe('GET');
    req.flush(profile);
  });

  it('debería modificar el perfil (PUT)', () => {
    const updatedProfile = { nombre: 'Perfil Actualizado' };

    service.modificarPerfil(updatedProfile).subscribe(res => {
      expect(res).toEqual(updatedProfile);
    });

    const req = httpMock.expectOne(`${apiUrl}/perfil`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedProfile);
    req.flush(updatedProfile);
  });

  it('debería iniciar sesión (POST)', () => {
    const loginData = { usuario: 'user', clave: 'pass' };
    const responseData = { token: 'abc123' };

    service.iniciarSesion(loginData).subscribe(res => {
      expect(res).toEqual(responseData);
    });

    const req = httpMock.expectOne(`${apiUrl}/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(loginData);
    req.flush(responseData);
  });

  it('debería establecer y obtener el usuario actual', () => {
    const user = { id: 1, nombre: 'Usuario Actual' };
    service.establecerUsuarioActual(user);
    expect(service.obtenerUsuarioActual()).toEqual(user);
  });
});
