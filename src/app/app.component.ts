import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lista-de-tareas';
  token:string | null = null;

  constructor(private router: Router) {}

  ngOnInit():void {
    this.token = sessionStorage.getItem('token')
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
