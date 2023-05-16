import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.css']
})
export class StatisticheComponent {
  //variabile per il grafico
  chart: any;
  arrayDati: any = [];
  arrayDate: any = [];
  datone : any = {
    labels: this.arrayDate,
    datasets: [{
      label: 'Casi Nazionali Covid-19',
      data: this.arrayDati,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    }]
  };

  options: any = {
    scales: {
      y: {
        ticks: {
          callback: function (value : any) {
            return value;
          }
        },
        grid: {
          display: false
        }
      },
      x: {
        display: true,
        grid: {
          display: true
        }
      }
    },
  };
  
  config: any = {
    type: 'line',
    data: this.datone,
    options: this.options
  };


  
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
        console.log(this.dati);
        this.data = this.dati[(this.dati.length-1)].data;
        this.casiTotali = this.dati[(this.dati.length-1)].totale_casi;
        this.deceduti = this.dati[(this.dati.length-1)].deceduti;
        this.nuoviCasi = this.dati[(this.dati.length-1)].nuovi_positivi;
        this.terapiaIntensiva = this.dati[(this.dati.length-1)].terapia_intensiva;
        this.totalePositivi = this.dati[(this.dati.length-1)].totale_positivi;
        this.variazioneTotalePositivi = this.dati[(this.dati.length-1)].variazione_totale_positivi;
        this.inserisciDatiUltimeDueSettimane();
        this.chart = new Chart('barChart', this.config);
      });
    }

    inserisciDatiUltimeDueSettimane()
    {

      for(let i = 14; i > 0; i--)
      {
        this.arrayDati.push(this.dati[(this.dati.length-i)].totale_casi);
      }

      for(let i = 14; i > 0; i--)
      {
        this.arrayDate.push(this.dati[(this.dati.length-i)].data.substring(0, 10));
      }
    }

    inserisciDatiUltimoAnno()
    {
      
    }
}
