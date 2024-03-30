import { Component } from '@angular/core';
import { SpendingsService } from '../../services/spendings.service';
import { LoggedUser } from '../../../../../task-management-FE/src/app/core/model/api.model';
import {  SpendDto, CustomResponse } from '../../core/model/api.model';
import { CommonModule, CurrencyPipe, NgClass, NgForOf } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-spendings',
  standalone: true,
  imports: [NgClass,CommonModule,ReactiveFormsModule,CurrencyPipe,NgForOf],
  templateUrl: './spendings.component.html',
  styleUrl: './spendings.component.scss'
})
export class SpendingsComponent {
  loggedUser:LoggedUser
  spendList: SpendDto[]
  totalPages: number
  currentPage: number = 0
  pageSize: number = 5
  constructor(private spendService:SpendingsService){
      const userData =  localStorage.getItem('user_data')
      if(userData != null){
        this.loggedUser = JSON.parse(userData)
      }
    }

    ngOnInit(): void {
      this.getAllSpends();
    }

    getAllSpends(){
        this.spendService.getAllSpends(this.loggedUser.accountId,this.currentPage,this.pageSize).subscribe(response =>{
          this.spendList = response.content
          this.totalPages = response.totalPages
        })
    }

    onPageChange(page: number): void {
      this.currentPage = page;
      this.getAllSpends();
    }

    createPageArray(): any[] {
      return Array(this.totalPages).fill(0).map((x, i) => i + 1);
    }

    deleteSpend(id:string){
        this.spendService.delete(id).subscribe((res:CustomResponse) => {
          if(res.result){
            alert(res.message)
            this.getAllSpends()
          }else{
            alert(res.message)
          }
        })

    }


}
