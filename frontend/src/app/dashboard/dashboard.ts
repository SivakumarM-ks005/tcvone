import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { AllCommunityModule, ColDef, DomLayoutType, ICellRendererParams, ModuleRegistry, themeBalham } from 'ag-grid-community';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { BreadcrumbService } from '../services/breadcrumb-service';
 ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
rowSelection:any;
  actionMenu: any;
  rowHeight = 20;
  isBrowser = false;
  pagination = true;
  domLayout: DomLayoutType = 'autoHeight';
  paginationPageSize = 5;
  paginationPageSizeSelector =[5,10, 25, 50,100];
  public theme = themeBalham;

  constructor(  @Inject(PLATFORM_ID) private platformId: Object,
private breadcrumbService: BreadcrumbService){
     this.isBrowser = isPlatformBrowser(this.platformId);
    this.rowSelection = {
      mode: 'multiRow',
  };
  }

ngOnInit():void{
  this.breadcrumbService.breadcrumbL1.next('Dashboard');
  this.breadcrumbService.breadcrumbL2.next('');
}
}
