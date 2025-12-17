import { Component, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { SnackbarService } from '../../services/snackbar-service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialogRef } from '@angular/material/dialog';
import { SignupData } from '../../interfaces/user-interface';
import { globalConstants } from '../../shared/global-constants';
import { materialModule } from '../../shared/material-module';
import { CommonModule, NgIf } from '@angular/common';
import { DialogConfig } from '@angular/cdk/dialog';


@Component({
  selector: 'app-dialog-changepassword',
  imports: [materialModule, NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './dialog-changepassword.html',
  styleUrl: './dialog-changepassword.scss',
})
export class DialogChangepassword {
  changePasswordForm!: FormGroup;
  hidePassword:boolean = true
  responsiveMessage: any
hideConfirmPassword:boolean = true
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private ngxUiLoader: NgxUiLoaderService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<DialogChangepassword>
  ) { }

  ngOnInit(): void {
    this.initForm();
  } 

  initForm(){
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required, Validators.pattern(globalConstants.passwordRegex)]],
      confirmPassword: [null, [Validators.required]]
    },
      {
       validators: this.passwordMatchValidator,

      });
  }
  
passwordMatchValidator(control:AbstractControl){
  return control.get('newPassword')?.value ===  control.get('confirmPassword')?.value? null : {mismatch : true}
}

changePasswordAction(){
    this.ngxUiLoader.start();
    var formData = this.changePasswordForm.value,
    data = {
      oldPassword : formData.oldPassword,
      newPassword : formData.newPassword
    }
    this.userService.changePassword(data).subscribe({
      next: (response:any)=>{
          this.ngxUiLoader.stop();
          this.dialogRef.close();
          this.responsiveMessage =response?.message;
          this.snackbarService.openSnackBar(this.responsiveMessage, "");
          this.router.navigate(['/']);
      }, error: (error)=>{
        this.ngxUiLoader.stop();
        if(error.error?.error){
          this.responsiveMessage = error.error?.message;
        }
        else{
          this.responsiveMessage = globalConstants.genericError
        }
        this.snackbarService.openSnackBar(this.responsiveMessage, globalConstants.errorRegex)
      }
    })
}

}
