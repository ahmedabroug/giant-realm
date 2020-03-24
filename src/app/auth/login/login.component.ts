import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  rememberMe: boolean;
  loading: boolean;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.email = 'admin@gmail.com';
    this.password = 'Admin1!';
  }

  login(email: string, password: string) {
    this.loading = true;
    this.auth.login(email, password)
      .then(() => {
        console.log('success');
        this.router.navigate(['/stock/dashboard']);
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
      });
  }

}
