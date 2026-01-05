import { Component, inject, signal } from '@angular/core';
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
import { IdleService } from '../services/idle-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  providers: [provideNativeDateAdapter()],
  imports: [materialModule, RouterOutlet, RouterLink, NgFor, MatExpansionModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  idleService = inject(IdleService);
  private idleSubscription?: Subscription;

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

    // ----------- idle logout function --------------
this.idleSubscription = this.idleService.idleState.subscribe((isIdle)=>{
  if(isIdle){
   
    this.logout();
     console.log("user is idle");
  }else {
    console.log("user is active")
  }
})

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

  ngOnDestroy():void{
    if(this.idleSubscription){
      this.idleSubscription.unsubscribe();
    }
  }

  onUserAction(){
    this.idleService.resetTimer();
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
