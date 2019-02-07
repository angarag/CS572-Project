import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.getToken()==null)
        return false;
        this.authService.checkRole().subscribe(data=>{
          console.log(data['data'])
            if(data['data']==='staff')
            return true;
            else this.router.navigate(['/login']);
        });
        return true;
      }
}