import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';
import firebase from 'firebase/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import {HttpClientModule} from '@angular/common/http'
import { TcnewsapiService } from './service/tcnewsapi.service';
import { TechComponent } from './tech/tech.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
// import { FormsModule } from '@angular/forms';
import { LoadingSoinnerComponent } from './shared/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { CodeComponent } from './code/code.component';
// import { PhoneAuthComponent } from './phone-auth/phone-auth.component';
// import { GameBoardComponent } from './snake_game/game-board/game-board.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterPipe } from './shared/filter.pipe';
// import { Header2Component } from './header/header2/header2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Header3Component } from './header3/header3.component';


@NgModule({
  declarations: [
    AppComponent,
    TopHeadlinesComponent,
    TechComponent,
    PlayerStatsComponent,
    AuthComponent,
    SignupComponent,
    LoadingSoinnerComponent,
    HeaderComponent,
    GameBoardComponent,
    PhoneNumberComponent,
    CodeComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgOtpInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TcnewsapiService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
