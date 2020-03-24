import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';



export const AUTHROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Login',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
    data: {
      title: 'Login',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Login',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: {
      title: 'Login',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  }
];

