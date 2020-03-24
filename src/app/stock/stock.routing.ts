import { Routes } from '@angular/router';
import { ProductShowcaseComponent } from '@store/product/product-showcase/product-showcase.component';
import { DashboardComponent } from './dashboard/dashboard.component';



export const STOCKROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  }
];
