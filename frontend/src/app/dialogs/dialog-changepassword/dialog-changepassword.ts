import { Component, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
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
//   changePasswordForm!: FormGroup;
  
//   responsiveMessage: any

//   constructor(
//     private formBuilder: FormBuilder,
//     private userService: UserService,
//     private router: Router,
//     private ngxUiLoader: NgxUiLoaderService,
//     private snackbarService: SnackbarService,
//     private dialogRef: MatDialogRef<DialogChangepassword>
//   ) { }

//   passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
//     const newPassword = form.get('newPassword')?.value;
//     const confirmPassword = form.get('confirmPassword')?.value;
//     return newPassword === confirmPassword ? null : { passwordMismatch: true };
//   }

//   ngOnInit(): void {
//     this.changePasswordForm = this.formBuilder.group({
//       // oldPassword: [null, [Validators.required]],
//       newPassword: [null, [Validators.required, Validators.pattern(globalConstants.passwordRegex)]],
//       confirmPassword: [null, [Validators.required]]
//     },
//       {
//         validators: this.passwordMatchValidator.bind(this)

//       });
//   }
// changePasswordAction(){
//      console.log("Password Changed:", this.changePasswordForm.value);
// }



}
