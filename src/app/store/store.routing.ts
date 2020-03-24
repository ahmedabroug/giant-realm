import { Routes } from '@angular/router';
import { ProductShowcaseComponent } from './product/product-showcase/product-showcase.component';



export const STOREROUTES: Routes = [
  {
    path: 'showcases',
    component: ProductShowcaseComponent,
    data: {
      title: 'Showcases',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  }
];

