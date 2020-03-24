import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Principal } from '@shared/services/principal.service';


/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the permissions passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *appHasAnyPermission="'READ_USER'">...</some-element>
 *
 *     <some-element *appHasAnyPermission="['READ_USER', 'DELETE_USER']">...</some-element>
 * ```
 */
@Directive({
  selector: '[grHasAnyPermission]'
})
export class HasAnyPermissionDirective {

  private permissions: string[];

  constructor(private principal: Principal, private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

  @Input()
  set appHasAnyPermission(value: string | string[]) {
    if (value && value !== '' && value.length > 0) {
      this.permissions = typeof value === 'string' ? [<string>value] : <string[]>value;
      this.updateView();
      // Get notified each time authentication state changes.
      this.principal.getAuthenticationState().subscribe((identity) => this.updateView());
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  private updateView(): void {
    this.principal.hasAnyPermissions(this.permissions).then((result) => {
      this.viewContainerRef.clear();
      if (result) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    });
  }
}
