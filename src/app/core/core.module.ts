import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './layouts/main/main.component';
import { EmptyComponent } from './layouts/empty/empty.component';



@NgModule({
  declarations: [MainComponent, EmptyComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
