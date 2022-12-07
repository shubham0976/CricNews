import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { CartService } from "../service/cart.service";
// import { AuthSarvice } from "./signup/auth.service";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy{
    private userSub!: Subscription;
    isAuthenticated =false;
    public totalItem : number = 0;
  public searchTerm !: string;

    constructor(private authService: AuthService, private cartService : CartService, private router : Router ){}

    ngOnInit():void {
        this.userSub= this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);

        });

        this.authService.autoLogin();

        this.cartService.getProducts()
        .subscribe(res=>{
          this.totalItem = res.length;
        })

        
    }
    ngOnDestroy(){
        this.userSub.unsubscribe();
        
    }

    search(event:any){
        this.searchTerm = (event.target as HTMLInputElement).value;
        console.log(this.searchTerm);
        this.cartService.search.next(this.searchTerm);
      }

      navcart(){
        this.router.navigate(['/cart'])
      }

}