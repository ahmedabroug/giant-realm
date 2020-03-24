import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './layouts/main/main.component';
import { EmptyComponent } from './layouts/empty/empty.component';
import { ShowComponent } from './layouts/show/show.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { SideBarComponent } from './sections/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavBarComponent } from './sections/nav-bar/nav-bar.component';
import { TopBarComponent } from './sections/top-bar/top-bar.component';
import { BreadcrumbComponent } from './sections/breadcrumb/breadcrumb.component';
import { NgxLoadingModule } from 'ngx-loading';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    ShowComponent,
    MainComponent,
    EmptyComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    NavBarComponent,
    TopBarComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({}),
    NgbDropdownModule
  ],
  exports: [AppRoutingModule]
})
export class CoreModule { }
