import { Component } from '@angular/core';
import { IContacto } from 'src/app/models/interfaces/contact.interface';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  listaDeContactos: IContacto[] = [
    {
      id: 0,
      nombre: 'Soledad',
      apellido: 'Carretero',
      email: 'lalalal@gmail.com'
    },
    {
      id: 1,
      nombre: 'Quick',
      apellido: 'silver',
      email: 'lalalal@gmail.com'
    },
    {
      id: 2,
      nombre: 'Bob',
      apellido: 'Esponja',
      email: 'lalalal@gmail.com'
    },
    {
      id: 3,
      nombre: 'Corre',
      apellido: 'Caminos',
      email: 'lalalal@gmail.com'
    },
  ]

}
