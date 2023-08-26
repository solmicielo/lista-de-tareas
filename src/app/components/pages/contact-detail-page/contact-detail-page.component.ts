import { Component } from '@angular/core';
// Debemos importar el Activated Route
import { ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent {
  id: any | undefined;
   //Debemos Inyectar el Activated Router en el Constructor
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Utilizamos el params para obtener los parametros de nuestra ruta atravez de un observable
    this.route.params.subscribe(
      (params: any) => {
        // le decimos que si tiene este parametro (el nombre es el que definimos en el routing module /:id)
        if (params.id){
          this.id = params.id;
        }
      })
  }

}
