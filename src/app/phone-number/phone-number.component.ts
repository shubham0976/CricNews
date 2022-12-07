import { Component, OnInit, NgZone } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

var config = {
  apiKey: "AIzaSyC4mg8DSNntDVsIn3UYVRpGDaWMIWQ4r2A",
  authDomain: "phone-auth-718e9.firebaseapp.com",
  projectId: "phone-auth-718e9",
  storageBucket: "phone-auth-718e9.appspot.com",
  messagingSenderId: "450299424986",
  appId: "1:450299424986:web:adb7de2ee717a6b4e7f5e3"
}

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css'],
})
export class PhoneNumberComponent implements OnInit {
  phoneNumber: any;
  reCaptchaVerifier!: any;

  constructor(private router: Router,private location : Location, private ngZone: NgZone) {}

  ngOnInit() {
    firebase.initializeApp(config);
  }
  closeHandler(){
    this.location.back()

  }

  getOTP() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );
    console.log(this.reCaptchaVerifier);

    console.log(this.phoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem(
          'verificationId',
          JSON.stringify(confirmationResult.verificationId)
        );
        this.ngZone.run(() => {
          this.router.navigate(['/code']);
        });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }
}