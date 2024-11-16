import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GestionProductosComponent } from './gestion-productos/gestion-productos.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'gestion-productos', component: GestionProductosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'listado-productos', component: ListadoProductosComponent },
  { path: 'gestion-usuarios', component: GestionUsuariosComponent }
];

export const appRouting = provideRouter(routes);
