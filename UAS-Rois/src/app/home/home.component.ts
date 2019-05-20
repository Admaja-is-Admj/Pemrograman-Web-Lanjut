import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'My Friend App!!';
  imageUrl = 'src/assets/image/profile.JPG';

  invalidLogin: boolean;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  signIn(credentials) {
    this.authService.loggin(credentials).
    subscribe(result => {
      if (result) 
        this.router.navigate(['/']);
      else
        this.invalidLogin = true;
    })
  }
}
