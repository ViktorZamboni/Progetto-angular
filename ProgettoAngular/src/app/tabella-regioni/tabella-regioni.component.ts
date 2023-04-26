import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';

@Component({
  selector: 'app-tabella-regioni',
  templateUrl: './tabella-regioni.component.html',
  styleUrls: ['./tabella-regioni.component.css']
})
export class TabellaRegioniComponent {
  dati: any;

  constructor (private servizio: DatiApiService) { }

  ngOnInit(): void {
    this.servizio.getDataRegioni().subscribe(datone => {
      this.dati = datone;
    });
  }
}
