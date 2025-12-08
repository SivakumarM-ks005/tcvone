import { Injectable } from '@angular/core';
import { changePasswordData, forgotPasswordData, loginData, SignupData} from '../interfaces/user-interface'
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
  forgotPassword(data:forgotPasswordData){
    return this.httpClient.post(`${this.url}/user/forgotPassword`,data,{
      headers: new HttpHeaders().set('content-type',"application/json")
    })
  }

  login(data:loginData){
    return this.httpClient.post(`${this.url}/user/login`, data,{
      headers: new HttpHeaders().set('content-type', "application/json")
    })
  }

  checkToken(){
    return this.httpClient.get(`${this.url}/user/getCheckToken`);
  }

  changePassword(data: changePasswordData){
    return this.httpClient.post(`${this.url}/user/changePassword`, data, {
      headers: new HttpHeaders().set('content-type',"application/json")
    })
  }

}
