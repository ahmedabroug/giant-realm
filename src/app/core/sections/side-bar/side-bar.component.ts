import { Component, OnInit, Input } from '@angular/core';
import { SIDE_BAR_ROUTES, RouteInfo } from './side-bar-items';
import { AuthService } from '@auth/services/auth.service';
import { User } from 'firebase';

@Component({
  selector: 'gr-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() show = true;

  showMenu: string = '';
  showSubMenu: string = '';
  public sidebarnavItems: RouteInfo[];
  currentUser: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.sidebarnavItems = SIDE_BAR_ROUTES.filter(route => route);
    this.currentUser = this.auth.currentUser;
    console.log('user', this.currentUser);
  }

  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';

    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';

    } else {
      this.showSubMenu = element;
    }
  }

}
