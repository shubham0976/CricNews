import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CodeComponent } from './code/code.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { SignupComponent } from './signup/signup.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
// import { GameBoardComponent } from './snake_game/game-board/game-board.component';

const routes: Routes = [
{path: '', component:TopHeadlinesComponent},
{path: 'player-stats',component:PlayerStatsComponent,},
{path: 'Login', component:AuthComponent},
{path: 'Signup',component:SignupComponent},
{path: 'series-stats', component:GameBoardComponent},
{ path: 'phone', component: PhoneNumberComponent },
{path: 'code', component:CodeComponent},
{path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},

{ path: '', redirectTo: '/phone', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
