import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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

  public updateUserbyId(userid){
    return this.http.get("http://localhost:3600/api/users/users/"+userid);
  }

  public loginSuccess(response) {
    // const token = response._token;
    // const role = response._role;
    // this.isAuthenticated = true;
    // this.jwtToken = token;

    // this.saveAuthData(token, role);
    
      console.log(response.body.message);
      this.router.navigate(['/home']);
      return true;
    
  }

  private saveAuthData(
    token: string,
    role: string,
  ) {
    localStorage.setItem("token", token);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("role", role);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token || !role) {
      return;
    }
    return {
      token: token,
      role: role
    };
  }
}
