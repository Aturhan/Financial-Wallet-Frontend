import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Constant } from '../core/constant/constant';
import { Observable } from 'rxjs';
import { CreateSpendingReq, CreateSpendRes } from '../core/model/api.model';

@Injectable({
  providedIn: 'root'
})
export class SpendingsService {

  constructor(private http:HttpClient) { }

  getAllSpends(accountId:string): Observable<any>{
    return this.http.get(environment.API_URL_SPENDINGS+Constant.API_ENDPOINT_SPENDINGS.GET_ALL+accountId)
  }

  save(createSpeningdReq:CreateSpendingReq):Observable<CreateSpendRes>{
    return this.http.post<CreateSpendRes>(environment.API_URL_SPENDINGS+Constant.API_ENDPOINT_SPENDINGS.SAVE,createSpeningdReq)
  }
}
