import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dati: any;
  data: string = "";
  casiTotali: string = "";
  deceduti: number = 0;
  nuoviCasi: number = 0;
  terapiaIntensiva: number = 0;
  totalePositivi: number = 0;
  variazioneTotalePositivi: number = 0;

  constructor(private servizio: DatiApiService) { }

  ngOnInit(): void {
    this.servizio.getData().subscribe(datone => {
      this.dati = datone;
      this.data = this.dati[0].data;
      this.casiTotali = this.dati[0].totale_casi;
      this.deceduti = this.dati[0].deceduti;
      this.nuoviCasi = this.dati[0].nuovi_positivi;
      this.terapiaIntensiva = this.dati[0].terapia_intensiva;
      this.totalePositivi = this.dati[0].totale_positivi;
      this.variazioneTotalePositivi = this.dati[0].variazione_totale_positivi;
    });
  }
}
