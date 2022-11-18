import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { SignupComponent } from './signup/signup.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';

const routes: Routes = [
{path: '', component:TopHeadlinesComponent},
{path: 'player-stats',component:PlayerStatsComponent},
{path: 'Login', component:AuthComponent},
{path: 'Signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
