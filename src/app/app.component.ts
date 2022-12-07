import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "./signup/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'CRICNEWS';
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
