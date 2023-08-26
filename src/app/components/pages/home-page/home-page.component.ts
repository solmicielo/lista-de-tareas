import { Component } from '@angular/core';
//Debemos Importar el Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
//Debemos Inyectar el Router en el Constructor
  constructor(private router: Router) { }

  

  navegarAContacts():void {
    //el navigate nos permite navegar de forma programatica a cualquiera de las rutas 
    this.router.navigate(['contacts'])
  }

}
