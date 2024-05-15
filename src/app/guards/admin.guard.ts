import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { ColaboradorService } from 'src/app/services/colaborador.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private _colaboradorService: ColaboradorService,
    private _router: Router
  ) {}

  canActivate(): any {
    if (!this._colaboradorService.isAuthenticate()) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
