import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { User, auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    this.sendEmailVerification();
  }

  async updateUser(user: User) {
    const result = await this.afAuth.auth.updateCurrentUser(user);
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
    this.router.navigate(['admin/verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['authentication/login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  get currentUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  async  loginWithGoogle() {
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['admin/list']);
  }

}
