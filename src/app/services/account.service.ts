import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Constant } from '../core/constant/constant';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  getTotalAmount(accountId:string):Observable<number>{
    return this.http.get<number>(environment.API_URL_ACCOUNT+Constant.API_ENDPOINT_ACCOUNT.GET+accountId)
  }
}
