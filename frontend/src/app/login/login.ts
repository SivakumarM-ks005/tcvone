import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { materialModule } from '../shared/material-module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogForgotPassword } from '../dialogs/dialog-forgot-password/dialog-forgot-password';
@Component({
  selector: 'app-login',
  imports: [materialModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private router:Router , private dialog: MatDialog){}

year: number = new Date().getFullYear();
 hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  loggedIn(){
    this.router.navigate(['/layout']);
  }
  forgotPassword(){
  const dialogConfig = new MatDialogConfig;
  dialogConfig.width = "600px";
  this.dialog.open(DialogForgotPassword, dialogConfig)
  }
}
