import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';

@Component({
  selector: 'app-tabella-regioni',
  templateUrl: './tabella-regioni.component.html',
  styleUrls: ['./tabella-regioni.component.css']
})
export class TabellaRegioniComponent {
  dati: any;
  datiTotale: any;
  mesi : string[] = [];
  mese:  string = "2020-02-24T18:00:00";
  nomeRegioniLink: string[] = ['abruzzo', 'basilicata', 'calabria', 'campania', 'emilia-romagna', 'fvg', 'lazio', 'liguria', 'lombardia', 'marche', 'molise', 'taa', 'taa', 'piemonte', 'puglia', 'sardegna', 'sicilia', 'toscana', 'umbria', 'vda', 'veneto'];
  
  constructor (private servizio: DatiApiService) { }

  ngOnInit(): void {
    this.servizio.getDataRegioni().subscribe(datone => {
      this.dati = datone;
    });
    
    this.servizio.getDataTotaleNazione().subscribe(datone => {
      this.datiTotale = datone;
      for(let i = 0; i<this.datiTotale.length; i++)
      {
        if(i%21===0)
        {
          this.mesi.push(this.datiTotale[i].data);
        }
      }
    });
  }

  
  cambiaDatiTabella()
  {
    let i = 0;
    this.datiTotale.forEach((element: any) => {
      if(element.data == this.mese)
      {
        this.dati[i] = element;
        i++;
      }
    });
  }
}
