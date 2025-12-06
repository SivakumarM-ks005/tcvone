import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { materialModule } from '../shared/material-module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogForgotPassword } from '../dialogs/dialog-forgot-password/dialog-forgot-password';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user-service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar-service';
import { loginData } from '../interfaces/user-interface';
import { globalConstants } from '../shared/global-constants';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [materialModule, NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: any = FormGroup;
  responsiveMessage: any
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private ngxUiLoader: NgxUiLoaderService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  year: number = new Date().getFullYear();
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loggedIn() {
    this.ngxUiLoader.start();
    var formData = this.loginForm.value,
    data = {
      userName: formData.userName,
      password: formData.password
    }

    this.userService.login(data).subscribe({
      next: (response:any)=>{
        this.ngxUiLoader.stop();
        localStorage.setItem('token',response.token);
        this.router.navigate(['/dashboard']);
      },
      error: (error)=>{
         this.ngxUiLoader.stop();
        if(error.error?.message){
          this.responsiveMessage = error.error?.message;
        }else {
          this.responsiveMessage = globalConstants.genericError
        }
        this.snackbarService.openSnackBar(this.responsiveMessage, globalConstants.errorRegex)
      }
    })
  }

  forgotPassword() {
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = "600px";
    this.dialog.open(DialogForgotPassword, dialogConfig)
  }
}
