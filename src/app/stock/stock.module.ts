import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { STOCKROUTES } from './stock.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { StorageComponent } from './storage/storage.component';
import { OrderComponent } from './order/order.component';
import { NgxEchartsModule } from 'ngx-echarts';




@NgModule({
  declarations: [DashboardComponent, ProductComponent, StorageComponent, OrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(STOCKROUTES),
    ChartsModule,
    NgxEchartsModule
  ]
})
export class StockModule { }
