import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private loggedIn:
  BehaviorSubject<boolean> = new
  BehaviorSubject<boolean>(false);

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }
  constructor(
    private router: Router
  ) {}

  loggin(user: User) {
    if( user.userName ! == '' && user.password !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.SVGPathSegCurvetoQuadraticRel.navigate(['/login']);
  }
}
