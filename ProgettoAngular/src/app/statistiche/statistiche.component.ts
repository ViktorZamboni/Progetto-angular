import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.css']
})
export class StatisticheComponent {
  //dati nazionali
  dati: any;
  //variabile per la data 
  data: string = "";
  //variabile per i casi totali
  casiTotali: string = "";
  //variabile per i deceduti
  deceduti: number = 0;
  //variabile per i nuovi casi
  nuoviCasi: number = 0;
  //variabile per i casi in terapia intensiva
  terapiaIntensiva: number = 0;
  //variabile per i casi totali positivi
  totalePositivi: number = 0;
  //variabile per la variazione dei casi totali positivi
  variazioneTotalePositivi: number = 0;

  constructor(private servizio: DatiApiService) { }

  //inizializzazione dati nazionali
  ngOnInit(): void {
    this.servizio.getDataNazionale().subscribe(datone => {
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
