import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiApiService {
  arrayPosizione: string[] = ["stileSelezionato", "stileDefault", "stileDefault"];
  constructor(public http: HttpClient) { }

  public getDataNazionale(){
    return this.http.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json');
  }

  public getDataRegioni(){
    return this.http.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json');
  }

  public getDataTotaleNazione(){
    return this.http.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json');
  }
  
cambiaStile(posizione: number)
{
  for(let i = 0; i < this.arrayPosizione.length; i++)
  {
    this.arrayPosizione[i] = "stileDefault";
  }
  this.arrayPosizione[posizione] = "stileSelezionato";
}
}
