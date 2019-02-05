import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public signOut() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.clear();
  }

  public saveToken(token: string) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public isUserLoggedIn(): boolean {
    return localStorage.getItem(TOKEN_KEY) != null;
  }
}