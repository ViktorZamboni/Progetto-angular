import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { TableComponent } from './table/table.component';
import { GlobalOverviewComponent } from './global-overview/global-overview.component';
import { ErrorComponent } from './error/error.component';
import { TabellaRegioniComponent } from './tabella-regioni/tabella-regioni.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
