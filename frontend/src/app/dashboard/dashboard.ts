import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { AllCommunityModule, ColDef, DomLayoutType, ICellRendererParams, ModuleRegistry, themeBalham } from 'ag-grid-community';
import { MatCheckboxModule } from '@angular/material/checkbox';
 ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-dashboard',
  imports: [AgGridAngular],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
rowSelection:any;
  actionMenu: any;
  rowHeight = 20;
  pagination = true;
  domLayout: DomLayoutType = 'autoHeight';
  paginationPageSize = 5;
  paginationPageSizeSelector =[5,10, 25, 50,100];
  public theme = themeBalham;
  constructor(){
    this.rowSelection = {
      mode: 'multiRow',
  };
  }
  defaultColDef:ColDef ={
    flex:1,
      filter:true,
      floatingFilter:true,
      headerClass :'ag-header-style',
    }
  rowData = [
    { 
      ref: "PR-113", 
      Rfx: "R-283", 
      CreatedDate: '26-Nov-2025', 
      ApprovedDate: '29-Nov-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFT',
      Buyer:'Karthick',
      Status:'PR Approved'
    },
    { 
      ref: "PR-114", 
      Rfx: "R-284", 
      CreatedDate: '26-Nov-2025', 
      ApprovedDate: '26-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFT',
      Buyer:'Karthick',
      Status:'Initiated Workflow'
    },
    { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    },
     { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    }, { 
      ref: "PR-115", 
      Rfx: "R-285", 
      CreatedDate: '01-Nov-2025', 
      ApprovedDate: '02-Dec-2025',
      ShortName:'Computer Accessories',
      PurchaseCategory:'RFQ',
      Buyer:'Karthick',
      Status:'Workflow Request for Information'
    },
   
];

colDefs: ColDef[] = [
  { field: "ref",
    headerName :'Ref #',
    maxWidth:70,
    cellClass: 'cellCenter'
   
  },
  { field: "Rfx",
    headerName :'Rfx Ref# '
  },
  { field: "CreatedDate",
    headerName :'Created Date'
  },
  { field: "ApprovedDate",
    headerName :'Approved Date'
  },
  { field: "ShortName",
    headerName :'Short Name'
  },
  { field: "PurchaseCategory",
    headerName :'Purchase Category',
    width:270,
  },
  { field: "Buyer",
    headerName :'Buyer',
    maxWidth:120,
  },
  { field: "Status",
    headerName :'Status',
    maxWidth:120,
  },
  {
          headerName: "Action", maxWidth: 120,
          cellRenderer: '', filter: false, sortable: false
        },
        {
          field: "action", 
          headerName: "Action", filter:false, floatingFilter: false, 
          cellStyle: {textAlign: 'center'},
          cellRenderer: (params: ICellRendererParams) => {
            return `
            <a>
              <span class="material-icons-outlined blue pe-1">visibility</span>            
            </a>
            <a >
              <span class="material-icons-outlined blue pe-1">browser_updated</span>            
            </a>
            <a >
              <span class="material-icons-outlined blue">verified</span>            
            </a>
            `;
          },  
        }
];
}
