// import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../signup/auth.service";
@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit, OnDestroy {
  isAuthenticated =false;
  private userSub: Subscription;

  constructor(private api:TcnewsapiService, private authService: AuthService) { }

  topHeadlinesData:any=[];

  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlinesData=result.articles;
    })

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