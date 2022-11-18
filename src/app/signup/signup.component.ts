import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoginMode = true;

  constructor(private location : Location, private authService: AuthService, private router: Router ) { }

  // constructor(){}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }


  closeHandler(){
    this.location.back()

  }

  isLoading=false;
  error:any = null;

  onSubmit(form: NgForm) {
    if(!form.valid){
      return;
    }
    const email= form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>

    this.isLoading=true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/player-stats'])
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}