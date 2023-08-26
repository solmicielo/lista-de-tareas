import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { ContactDetailPageComponent } from './components/pages/contact-detail-page/contact-detail-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  //Para poner la ruta raiz, osea la de nuestro dominio  ponemos un path vacio
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  },
  //en el path va la direccion url, lo que va dsp de nuestro dominio (nuestroDominio.com/home)
  {
    path:'home',
    component: HomePageComponent,
    // Los hijos serian las url que van dsp /home (nuestroDominio.com/home/registro)
    children:[
      {
        path:'hijo',
        component: RegisterFormComponent
      }
    ]
  },
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'contacts',
    component: ContactPageComponent,
    // aqui ponemos el canActivate y el nombre de los Guards que queremos usuar(si alguno da false no se renderiza el componente)
    canActivate: [ authGuard]
  },
  {
    path:'contacts/:id',
    component: ContactDetailPageComponent
  },
  //Si no ha encontrado el componente a renderizar
  {
    path:'**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
