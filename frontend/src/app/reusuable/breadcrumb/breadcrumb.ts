import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
@Input() breadcrumbL1 : string=''
@Input() breadcrumbL2 : string=''
}
