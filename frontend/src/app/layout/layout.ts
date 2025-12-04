import { Component } from '@angular/core';
import { materialModule } from '../shared/material-module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupDialog } from '../dialogs/signup-dialog/signup-dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
import { Dashboard } from '../dashboard/dashboard';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user-service';
@Component({
  selector: 'app-layout',
  providers: [provideNativeDateAdapter()],
  imports: [materialModule, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  opened = false;
  constructor(private dialog: MatDialog, 
    private breakpointObserver: BreakpointObserver,
  private router:Router,
private userService: UserService) {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe(result => {
        this.opened = result.matches;
      });
  }

  ngOnInit():void {
    if(localStorage.getItem('token')!= null){
      this.userService.checkToken().subscribe({
        next:(response:any)=>{
          this.router.navigate(['/tcv/dashboard']);
        }, error: (error:any)=>{
          console.log(error);
        }
      })
    }
  }
  
  signupAction() {
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = "600px"
    this.dialog.open(SignupDialog, dialogConfig);
  }
}
