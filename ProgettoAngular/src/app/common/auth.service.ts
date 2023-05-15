import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
    }).catch((error) => {
      alert(error.message);
      this.router.navigate(['/login']);
    });
  }

  signup(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert("Account creato con successo!");
      this.router.navigate(['/login']);
    }).catch((error) => {
      alert(error.message+email+password);
      this.router.navigate(['/signup']);
    });
  }

  logout() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }).catch((error) => {
      alert(error.message);
    });
  }
}
