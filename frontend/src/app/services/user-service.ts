import { Injectable } from '@angular/core';
import { SignupData} from '../interfaces/user-interface'
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.apiUrl;
  constructor( private httpClient: HttpClient){}

  signup(data:SignupData){
    return this.httpClient.post(`${this.url}/user/signup`, data,{
      headers: new HttpHeaders().set('content-type', "application/json")
    })
  }
}
