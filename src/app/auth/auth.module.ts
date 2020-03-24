import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/login/login.component';
import { NotFoundComponent } from '../auth/not-found/not-found.component';
import { RegisterComponent } from '../auth/register/register.component';
import { ForgotPasswordComponent } from '../auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../auth/verify-email/verify-email.component';
import { NgxLoadingModule } from 'ngx-loading';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AUTHROUTES } from './auth.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    RouterModule.forChild(AUTHROUTES),
    NgbDropdownModule
  ]
})
export class AuthModule { }
