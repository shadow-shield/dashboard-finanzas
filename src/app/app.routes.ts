import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import ('./shared/components/layout/layout.component'),
   children:[
    {
      path: 'dashboard',
      loadComponent: () => import ('./pages/dashboard/dashboard.component')

    },
    {
      path: 'perfil',
      loadComponent: () => import ('./pages/perfil/perfil.component')
    },
    {
      path:'tablas',
      loadComponent: () => import ('./pages/tablas/tablas.component')
    },
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    }
   ]
  },
  {
    path:'login',
    loadComponent: () => import ('./pages/authentication/login/login.component')
  },
  {
    path: '**',
    redirectTo: 'dashboard',

  }

];
