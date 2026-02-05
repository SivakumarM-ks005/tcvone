import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  breadcrumbL1= new BehaviorSubject<string>('');
  breadcrumbL2 = new BehaviorSubject<string>('');
}
