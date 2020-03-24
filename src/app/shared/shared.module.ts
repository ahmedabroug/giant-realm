import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { HasAnyConditionDirective } from './directives/has-any-condition.directive';
import { HasAnyPermissionDirective } from './directives/has-any-permission.directive';


@NgModule({
  declarations: [
    GenericTableComponent,
    HasAnyConditionDirective,
    HasAnyPermissionDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
