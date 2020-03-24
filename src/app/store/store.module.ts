import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShowcaseComponent } from './product/product-showcase/product-showcase.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { BasketComponent } from './basket/basket.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ListComponent } from './stock/list/list.component';
import { StatComponent } from './stock/stat/stat.component';
import { DetailComponent } from './order/detail/detail.component';
import { RouterModule } from '@angular/router';
import { STOREROUTES } from './store.routing';




@NgModule({
  declarations: [
    ProductShowcaseComponent,
    ProductListComponent,
    ProductDetailComponent,
    BasketComponent,
    ShowcaseComponent,
    ListComponent,
    StatComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(STOREROUTES),
  ]
})
export class StoreModule { }
