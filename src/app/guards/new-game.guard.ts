import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GameSettingsService } from '../services';

@Injectable()
export class NewGameGuard implements CanActivate {
  constructor(
    private gameSettingsService: GameSettingsService,
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.gameSettingsService.get("newGameSetup"));
      if (this.gameSettingsService.get("newGameSetup")) {
        return true;
      } else {
        this.router.navigate(["/"]);
      }
      return false;
  }
}
