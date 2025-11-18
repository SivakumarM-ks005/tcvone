import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { SnackbarService } from '../../services/snackbar-service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialogRef } from '@angular/material/dialog';
import { SignupData } from '../../interfaces/user-interface';
import { globalConstants } from '../../shared/global-constants';
import { materialModule } from '../../shared/material-module';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-signup-dialog',
  imports: [ materialModule, NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './signup-dialog.html',
  styleUrl: './signup-dialog.scss',
})
export class SignupDialog {
  signupForm:any= FormGroup;
  responseMessage:any
hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
    constructor( 
      private formBuilder:FormBuilder,
      private router:Router,
      private userService:UserService,
      private snackbarService: SnackbarService,
      private ngxUiLoader: NgxUiLoaderService,
      private dialogRef: MatDialogRef<SignupDialog>
    ){}

    ngOnInit():void{
      this.signupForm = this.formBuilder.group({
        userName:[null,[Validators.required, Validators.pattern(globalConstants.nameRegex)]],
        password: [null,[Validators.required, Validators.pattern(globalConstants.passwordRegex)]],
        email:[null, [Validators.required, Validators.pattern(globalConstants.emailRegex)]],
        contactNumber:[null,[Validators.required, Validators.pattern(globalConstants.contactNumberRegex)]],
        firstName:[null, [Validators.required]],
        lastName:[null,[Validators.required]]
      })
    }

    signupSubmit(){
      this.ngxUiLoader.start();
      var formData = this.signupForm.value,
      data ={
        userName: formData.userName,
        password: formData.password,
        email:formData.email,
        contactNumber: formData.contactNumber,
        firstName: formData.firstName,
        lastName:formData.lastName
      }
      this.userService.signup(data).subscribe({
        next:(response:any)=>{
          this.ngxUiLoader.stop();
          this.dialogRef.close();
          this.responseMessage = response?.message;
          this.snackbarService.openSnackBar(this.responseMessage,"");
          this.router.navigate(['/']);
        }, error:(error:any)=>{
          this.ngxUiLoader.stop();
          if(error.error?.message){
            this.responseMessage = error.error?.message;
          }else {
            this.responseMessage = globalConstants.genericError
          }
          this.snackbarService.openSnackBar(this.responseMessage, globalConstants.errorRegex);
        }
      })
    }
}
