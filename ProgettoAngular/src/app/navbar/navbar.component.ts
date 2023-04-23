import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
nascondi: boolean = false;
arrayPosizione: string[] = ["stileSelezionato", "stileDefault", "stileDefault"];

constructor() { }

cambiaStile(posizione: number)
{
  for(let i = 0; i < this.arrayPosizione.length; i++)
  {
    this.arrayPosizione[i] = "stileDefault";
  }
  this.arrayPosizione[posizione] = "stileSelezionato";
}

nascondiMenu()
{
  this.nascondi = !this.nascondi;
}
}
