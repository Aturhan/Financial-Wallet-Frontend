import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Constant } from '../core/constant/constant';
import { Observable } from 'rxjs';
import { CreateSpendingReq, CreateSpendRes, CustomResponse } from '../core/model/api.model';

@Injectable({
  providedIn: 'root'
})
export class SpendingsService {

  constructor(private http:HttpClient) { }

  getAllSpends(accountId:string,page:number,size:number): Observable<any>{
    const params = {
      accountId: accountId,
      page: page,
      size: size
    }

    return this.http.get(environment.API_URL_SPENDINGS+Constant.API_ENDPOINT_SPENDINGS.GET_ALL,{params: params})
  }

  save(createSpeningdReq:CreateSpendingReq):Observable<CreateSpendRes>{
    return this.http.post<CreateSpendRes>(environment.API_URL_SPENDINGS+Constant.API_ENDPOINT_SPENDINGS.SAVE,createSpeningdReq)
  }

  delete(id:string):Observable<CustomResponse>{
    return this.http.delete<CustomResponse>(environment.API_URL_SPENDINGS+Constant.API_ENDPOINT_SPENDINGS.DELETE+id);
  }
}
