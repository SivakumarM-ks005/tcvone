import { Component } from '@angular/core';
import { materialModule } from '../../shared/material-module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { SnackbarService } from '../../services/snackbar-service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialogRef } from '@angular/material/dialog';
import { globalConstants } from '../../shared/global-constants';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-dialog-forgot-password',
  imports: [ materialModule, NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './dialog-forgot-password.html',
  styleUrl: './dialog-forgot-password.scss',
})
export class DialogForgotPassword {
 forgotPasswordForm:any = FormGroup;
 responsiveMessage:any;

 constructor( 
  private formBuilder: FormBuilder,
  private router: Router,
  private userService: UserService,
  private snackbarService: SnackbarService,
  private ngxUiLoader: NgxUiLoaderService,
  private dialogConfig: MatDialogRef<DialogForgotPassword>
 ){}

 ngOnInit():void{
  this.forgotPasswordForm = this.formBuilder.group({
    email:[null,[Validators.required, Validators.pattern(globalConstants.emailRegex)]]
  })
 }

 forgotPasswordSubmit(){
  this.ngxUiLoader.start();
  var formData = this.forgotPasswordForm.value,
  data = {
    email: formData.email
  }
  console.log("data",data );
  this.userService.forgotPassword(data).subscribe({
    next:(response:any)=>{
      this.ngxUiLoader.stop();
      this.dialogConfig.close();
      this.responsiveMessage = response?.message;
      this.snackbarService.openSnackBar(this.responsiveMessage,"")
      this.router.navigate(['/'])
    },error: (error:any)=>{
      this.ngxUiLoader.stop();
         this.dialogConfig.close();
      if(error.error?.message){
        this.responsiveMessage = error.error?.message
      }else{
        this.responsiveMessage = globalConstants.genericError
      }
      this.snackbarService.openSnackBar(this.responsiveMessage, globalConstants.errorRegex)
    }
  })
 }
}
