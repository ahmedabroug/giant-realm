import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/services/auth.service';

@Component({
  selector: 'gr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    console.log('user', this.auth.currentUser);
  }

}
