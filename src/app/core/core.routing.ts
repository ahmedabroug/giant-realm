import { Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { NotFoundComponent } from '../auth/not-found/not-found.component';
import { RegisterComponent } from '../auth/register/register.component';
import { VerifyEmailComponent } from '../auth/verify-email/verify-email.component';



export const COREROUTES: Routes = [
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
    path: '404',
    component: NotFoundComponent,
    data: {
      title: 'Login',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  }
];
