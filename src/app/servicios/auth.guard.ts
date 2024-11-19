import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GestionUsuariosService } from '../servicios/gestion-usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private gestionUsuariosService: GestionUsuariosService, private router: Router) {}

  canActivate(route: any): boolean {
    const usuarioActual = this.gestionUsuariosService.obtenerUsuarioActual();
    
    if (!usuarioActual) {
      this.router.navigate(['/login']);
      return false;
    }

    const expectedRole = route.data['expectedRole'];
    if (expectedRole && usuarioActual.rol !== expectedRole) {
      // Redirigir a una página específica si el usuario no tiene el rol correcto
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
