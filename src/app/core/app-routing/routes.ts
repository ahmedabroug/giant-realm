import { Routes } from '@angular/router';
import { MainComponent } from '@core/layouts/main/main.component';
import { EmptyComponent } from '@core/layouts/empty/empty.component';
import { LoggedInGuard } from 'app/auth/services/logged-in.guard';
import { ShowComponent } from '@core/layouts/show/show.component';


export const ROUTES: Routes = [
  // shop layout
  {
    path: '',
    component: ShowComponent,
    children: [
      { path: '', redirectTo: '/shop/showcases', pathMatch: 'full' },
      { path: 'shop', loadChildren: () => import('@store/store.module').then(m => m.StoreModule) },
    ]
  },
  // administration layout
  {
    path: '',
    component: MainComponent,
    canActivate: [LoggedInGuard],
    children: [
      { path: 'stock', loadChildren: () => import('@stock/stock.module').then(m => m.StockModule) },
    ]
  },
  // security layout
  {
    path: '',
    component: EmptyComponent,
    children: [
      { path: 'authentication', loadChildren: () => import('@auth/auth.module').then(m => m.AuthModule) },
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404',
    pathMatch: 'full'
  }
];
