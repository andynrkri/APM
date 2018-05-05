import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class ProductGaurdService implements CanActivate{

  constructor(private _router:Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert("Invalid id dude");
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
