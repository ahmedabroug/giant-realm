import { Routes } from '@angular/router';
import { ProductShowcaseComponent } from '@store/product/product-showcase/product-showcase.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { StorageComponent } from './storage/storage.component';
import { OrderComponent } from './order/order.component';



export const STOCKROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  },
  {
    path: 'product',
    component: ProductComponent,
    data: {
      title: 'Dashboard',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  },
  {
    path: 'storage',
    component: StorageComponent,
    data: {
      title: 'Dashboard',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  },
  {
    path: 'order',
    component: OrderComponent,
    data: {
      title: 'Dashboard',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  }
];
