import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../core/model/api.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Constant } from '../core/constant/constant';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(register:Register): Observable<any>{
      return this.http.post<any>(environment.API_URL_USER+Constant.API_ENDPOINT_USER.REGISTER,register)
  }
}
