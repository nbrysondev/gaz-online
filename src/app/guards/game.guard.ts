import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GameStateService } from '../services';

@Injectable()
export class GameGuard implements CanActivate {
  constructor(
    private gameStateService: GameStateService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // @todo remove
    this.gameStateService.load(0);
    return true;
  }
}
