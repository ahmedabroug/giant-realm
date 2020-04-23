import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';



export const CONFIGROUTES: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'Profile',
      urls: [{ title: 'doctrinalplus', url: '/review' }, { title: 'ngComponent' }, { title: 'Create Review' }]
    }
  }
];
