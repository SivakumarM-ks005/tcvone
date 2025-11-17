import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { materialModule } from '../shared/material-module';
@Component({
  selector: 'app-login',
  imports: [materialModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private router:Router ){}

year: number = new Date().getFullYear();
 hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  loggedIn(){
    this.router.navigate(['/layout']);
  }
}
