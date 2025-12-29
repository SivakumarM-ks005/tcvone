import { Component, signal } from '@angular/core';
import { materialModule } from '../shared/material-module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupDialog } from '../dialogs/signup-dialog/signup-dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgFor, NgIf } from '@angular/common';
import { Dashboard } from '../dashboard/dashboard';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user-service';
import { DialogChangepassword } from '../dialogs/dialog-changepassword/dialog-changepassword';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { MenuItems } from '../shared/menu-items';
import {MatExpansionModule} from '@angular/material/expansion';
import { ConfirmationDialog } from '../dialogs/confirmation-dialog/confirmation-dialog';
@Component({
  selector: 'app-layout',
  providers: [provideNativeDateAdapter()],
  imports: [materialModule, RouterOutlet, RouterLink, NgFor, MatExpansionModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  token:any = localStorage.getItem('token');
  tokenPayload: any;
  opened = false;
  menuList:any[]=[];
  readonly panelOpenState = signal(false);
  constructor(private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private menuItems : MenuItems,
    @Inject(PLATFORM_ID) private platformId: Object,
    private userService: UserService) {

    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe(result => {
        this.opened = result.matches;
      });

      this.tokenPayload = jwtDecode(this.token)
      
  }

  ngOnInit(): void {
    this.menuList = this.menuItems.getMenuItems();
    
      if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('token');
    if (localStorage.getItem('token') != null) {
      this.userService.checkToken().subscribe({
        next: (response: any) => {
          this.router.navigate(['/tcv']);
        }, error: (error: any) => {
          console.log(error);
        }
      })
    }
  }
  }

  signupAction() {
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = "600px"
    this.dialog.open(SignupDialog, dialogConfig);
  }

  changePasswordAction(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width="400px"
    this.dialog.open(DialogChangepassword, dialogConfig)
  }

  logout(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = "400px"
    dialogConfig.data={
      message: "Logout"
    }
    const dialogRef = this.dialog.open(ConfirmationDialog, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((user)=>{
      dialogRef.close();
      localStorage.clear();
      this.router.navigate(['/']);
    })
  }
}
