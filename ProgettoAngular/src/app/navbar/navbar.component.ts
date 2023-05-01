import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
nascondi: boolean = false;

constructor(public servizio: DatiApiService) { }



nascondiMenu()
{
  this.nascondi = !this.nascondi;
}
}
