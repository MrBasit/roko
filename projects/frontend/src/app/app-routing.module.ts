import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'vendor',
    loadChildren: () => import('./pages/vendor/vendor.module').then(m => m.VendorModule),
    data: {
      breadcrumb: {
        label: 'Dashboard'
      }
    }
  },
  {
    path: '**',
    redirectTo: '/page/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
