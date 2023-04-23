import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any;

  constructor(private servizio: DatiApiService) { }

  ngOnInit(): void {
    this.servizio.getData();
  }

}
