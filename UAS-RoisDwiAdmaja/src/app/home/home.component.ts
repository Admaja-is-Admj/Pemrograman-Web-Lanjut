import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'My Friends App..!'
  ImageUrl = 'assets/images/profil.jpg'
  invalidLogin: boolean;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  signIn(credentials) {
    this.authService.login(credentials)
    .subscribe(result =>{
      if (result) 
        this.router.navigate(['/friend']);  
      else
        this.invalidLogin =true;
    })
  }

}
