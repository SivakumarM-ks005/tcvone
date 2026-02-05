import { Component, Output, EventEmitter } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb-service';

@Component({
  selector: 'app-brands-list',
  imports: [],
  templateUrl: './brands-list.html',
  styleUrl: './brands-list.scss',
})
export class BrandsList {

  constructor( private breadcrumbService : BreadcrumbService){}

  ngOnInit():void {
    this.breadcrumbService.breadcrumbL1.next('Products');
    this.breadcrumbService.breadcrumbL2.next('Brand List');
  }

}
