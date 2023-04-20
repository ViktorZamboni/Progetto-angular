import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
nascondi: boolean = false;

constructor() { }

nascondiMenu()
{
  this.nascondi = !this.nascondi;
}
}
