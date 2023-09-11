import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  constructor(private route: Router, private authService: AuthService){

  }
  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    email: new FormControl(''),
    phone: new FormControl(''),
    referral: new FormControl(''),
  });

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  forgotPasswordForm = new FormGroup({
    email: new FormControl(''),
  });

  activeForm: 'register' | 'login' | 'forgot-password' = 'login';

  setActiveForm(formName: 'register' | 'login' | 'forgot-password'): void {
    this.activeForm = formName;
  }

  register() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.authService.register(userData).subscribe(
        (response) => {
          console.log('Registration successful', response);
        },
        (error) => {
          console.error('Registration error', error);
        }
      );
    }
  }

  login() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.route.navigate(['dashboard']);
        },
        (error) => {
          console.error('Login error', error);
        }
      );
    }
  }

  forgotPassword() {
    // forgot password form submission
  }
}
