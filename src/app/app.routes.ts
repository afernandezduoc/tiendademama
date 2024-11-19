import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { GestionProductosComponent } from './gestion-productos/gestion-productos.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './servicios/auth.guard';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'listado-productos', component: ListadoProductosComponent },
  { path: 'gestion-productos', component: GestionProductosComponent, canActivate: [AuthGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'gestion-usuarios', component: GestionUsuariosComponent, canActivate: [AuthGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard], data: { expectedRole: 'USER' } },
];
