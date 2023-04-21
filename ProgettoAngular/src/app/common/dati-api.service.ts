import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiApiService {
  constructor(public http: HttpClient) { }
  public getData() {
    this.http.get('https://api.covid19api.com/summary')
             .subscribe(data => {
                 console.log(data);
             },
             error => {
    
             }
    );
  }
}
