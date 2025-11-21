import { Component } from '@angular/core';
import { materialModule } from '../shared/material-module';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupDialog } from '../dialogs/signup-dialog/signup-dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-layout',
 providers: [provideNativeDateAdapter()],
  imports: [materialModule, NgIf],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

    opened = false;
  constructor(private dialog: MatDialog, private breakpointObserver: BreakpointObserver){
     this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe(result => {
        this.opened = result.matches;
      });
  }
  signupAction(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = "600px"
    this.dialog.open(SignupDialog, dialogConfig);
  }
}
