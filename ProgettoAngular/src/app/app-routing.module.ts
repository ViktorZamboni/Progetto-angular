import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { TableComponent } from './table/table.component';
import { GlobalOverviewComponent } from './global-overview/global-overview.component';
import { ErrorComponent } from './error/error.component';
import { TabellaRegioniComponent } from './tabella-regioni/tabella-regioni.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, children: [
    {path:'statistiche', component: StatisticheComponent},
    {path:'tableRegioni', component: TabellaRegioniComponent}
  ]},
  {path:'about', component: AboutComponent},
  {path:'overview', component: GlobalOverviewComponent, children: [
    {path:'table', component: TableComponent}
  ]},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
