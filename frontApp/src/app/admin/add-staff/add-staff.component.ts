import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth_services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  private signupForm: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
      this.signupForm = formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        accept: [0]
      });
    }
  ngOnInit() {}
}




