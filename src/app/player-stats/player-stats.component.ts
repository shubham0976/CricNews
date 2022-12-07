// import { Component, OnInit } from '@angular/core';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../signup/auth.service";

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit, OnDestroy {

  isAuthenticated =false;
  private userSub: Subscription;
    

    constructor(private authService: AuthService){}

    ngOnInit() {
      
      
        this.userSub= this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);

        });

        this.authService.autoLogin();

        
    }
    ngOnDestroy(){
        this.userSub.unsubscribe();
        
    }

    onLogout(){
      this.authService.logout();
    }
}
