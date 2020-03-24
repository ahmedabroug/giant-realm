import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/services/auth.service';

@Component({
  selector: 'gr-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .then(value => console.log(value))
      .catch(err => console.log(err));
  }

}
