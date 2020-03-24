import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[grHasAnyCondition]'
})
export class HasAnyConditionDirective {

  private conditions: string[];
  private _status: string;


  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

  }

  @Input()
  set appHasAnyCondition(value: string | string[]) {
    if (value && value !== '' && value.length > 0) {
      this.conditions = typeof value === 'string' ? [<string>value] : <string[]>value;
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  @Input()
  set appHasAnyConditionStatus(value: string) {
    this._status = value;
    this.updateView();

  }

  private updateView(): void {
    if (this.conditions) {
      if (this.conditions
        .some(condition => condition === this._status) || this.conditions.some(condition => condition === 'ISADMIN')) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    }
  }


}
