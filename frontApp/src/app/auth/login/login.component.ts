import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  private loginForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [1, [Validators.required]]
    });
  }
 
  onSubmit() {
    console.log(this.loginForm);
    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.login(user)
    .subscribe(res => {
      this.authService.loginSuccess(res);
      console.log('IS AUTHENTICATED'+this.authService.isLoggedIn())
      this.router.navigate(['/home'])
    },
    err => console.log(err)
    );

  }

}
