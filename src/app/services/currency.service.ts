import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Constant } from '../core/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(environment.API_URL_CURRENCY+Constant.API_ENDPOINT_CURRENCY.GET_ALL)
  }
}
