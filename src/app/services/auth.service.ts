import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest, AuthResponse } from '../core/model/api.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Constant } from '../core/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient) { }

  login(authRequest:AuthRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(environment.API_URL_AUTH+Constant.API_ENDPOINT_USER.LOGIN,authRequest)
  }

  private isLogin(token:any){
    this.isAuthenticated.next(true)
  }

  logOut(){
    localStorage.removeItem("auth_token")
    this.isAuthenticated.next(false)
  }
}
