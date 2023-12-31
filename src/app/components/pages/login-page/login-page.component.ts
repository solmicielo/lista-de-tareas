import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private router: Router){}

  ngOnInit(): void {

    let token = sessionStorage.getItem('token');

    if (token){
      this.router.navigate(['home']);
    }

}

loginUser(){
  sessionStorage.setItem('token','1234567898');
  this.router.navigate(['contacts']);

}
}