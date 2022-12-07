import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

// import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = false;
  
  isAuthenticated =false;
  private userSub: Subscription;

  constructor(private location : Location, private authService: AuthService, private router: Router ) { }


  ngOnInit() {
    
      
    this.userSub= this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);

    });

    

    
}
ngOnDestroy(){
    this.userSub.unsubscribe();
    
}

  // constructor(){}

  onSwitchMode() {
    // this.isLoginMode = !this.isLoginMode;
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

