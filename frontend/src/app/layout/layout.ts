import { Component } from '@angular/core';
import { materialModule } from '../shared/material-module';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupDialog } from '../dialogs/signup-dialog/signup-dialog';

@Component({
  selector: 'app-layout',
 providers: [provideNativeDateAdapter()],
  imports: [materialModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  constructor(private dialog: MatDialog){}
  signupAction(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = "600px"
    this.dialog.open(SignupDialog, dialogConfig);
  }
}
