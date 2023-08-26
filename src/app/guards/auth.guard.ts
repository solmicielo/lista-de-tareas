import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  // obtenemos el token del session storage
  let token = sessionStorage.getItem('token');

  // si devolvemos True Cargamos la ruta y si devolvemos False no cargamos la ruta
  if(token){
    return true
  }else {
  // si no esta logueado lo redireccionamos a la pagina de login
    router.navigate(['login']);
    return false
  }

  
  return true;
};
