import { Injectable } from '@angular/core';
import { brand } from '../interfaces/products-interface';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  url =environment.apiUrl;
  constructor( private httpClient: HttpClient){}
  
    getAllBrands(){
      return this.httpClient.get(`${this.url}/brand/get`,{
        headers: new HttpHeaders().set('content-type',"application/json")
      })
    }

    addBrand( data: brand){
      return this.httpClient.post( `${this.url}/brand/add`, data,{
        headers: new HttpHeaders().set('content-type', "application/json")
      })
    }

    updateBrand(data:brand){
      return this.httpClient.patch(`${this.url}/brand/update`, data,{
        headers: new HttpHeaders().set('content-type',"application/json")
      })
    }

}
