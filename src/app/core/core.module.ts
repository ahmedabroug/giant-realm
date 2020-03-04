import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './layouts/main/main.component';
import { EmptyComponent } from './layouts/empty/empty.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { SideBarComponent } from './sections/side-bar/side-bar.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';



@NgModule({
  declarations: [
    MainComponent,
    EmptyComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
