import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { TableComponent } from './table/table.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GlobalOverviewComponent } from './global-overview/global-overview.component';
import { ErrorComponent } from './error/error.component';
import { TabellaRegioniComponent } from './tabella-regioni/tabella-regioni.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StatisticheComponent,
    TableComponent,
    AboutComponent,
    HomeComponent,
    GlobalOverviewComponent,
    ErrorComponent,
    TabellaRegioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
