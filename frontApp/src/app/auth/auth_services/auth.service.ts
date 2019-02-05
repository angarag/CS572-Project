import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenTimer;
  private isAuthenticated = false;
  private jwtToken = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  public signup(user) {
    return this.http.post("http://localhost:3600/api/users/signup", user);
  }

  public login(user) {
    return this.http.post("http://localhost:3600/api/users/login", user);
  }

  public getUser(){
    return this.http.get("http://localhost:3600/api/users/users");
  }

  public updateUserbyId(staff){
    console.log('updateid api called');
    return this.http.post("http://localhost:3600/api/users/users/", staff);
  }

  public getToken() {
    return localStorage.token;
  }

  public isLoggedIn() {
    return localStorage.isAuthenticated ==='true';
  }

  public isStaff() {
    return localStorage.role === "staff" ? true : false;
  }

  public isStudent() {
    return localStorage.role === "student" ? true : false;
  }

  public logout() {
    this.jwtToken = null;
    this.isAuthenticated = false;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/login"]);
  }

    public loginSuccess(response) {
      console.log('login success');
      const token = response._token;
      const role = response._role;
      const expiresIn = response._expiresIn;
      this.isAuthenticated = true;
      this.jwtToken = token;
      this.setAuthTimer(expiresIn);
      const now = new Date();
      const expirationDate = new Date(now.getTime() + expiresIn * 1000);
      this.saveAuthData(token, role, expirationDate);
    }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(
    token: string,
    role: string,
    expirationDate: Date,
  
  ) {
    localStorage.setItem("token", token);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("role", role);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    localStorage.removeItem("expiration");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !role || !expirationDate) {
      return;
    }
    return {
      token: token,
      role: role,
      expirationDate: new Date(expirationDate)
    };
  }


}


