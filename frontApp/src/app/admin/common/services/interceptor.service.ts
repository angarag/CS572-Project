import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
    providedIn: 'root'
  })
export class JwtInterceptor implements HttpInterceptor {
    islogged: boolean;
    token: string = '';
    constructor(private service: TokenService ) {   
        this.token = this.service.getToken()
        this.islogged =  this.token != null;
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.islogged && this.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${this.token}`
                }
            });
        }
        return next.handle(request);
    }
}