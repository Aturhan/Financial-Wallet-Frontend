import { Component } from '@angular/core';
import { LoggedUser } from '../../../../../task-management-FE/src/app/core/model/api.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NgClass,CurrencyPipe],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  loggedUser:LoggedUser
  totalAmount:number
  constructor(private accountService:AccountService){
   const userData =  localStorage.getItem('user_data')
   if(userData != null){
     this.loggedUser = JSON.parse(userData)

   }
  }

   ngOnInit(): void {
     this.accountService.getTotalAmount(this.loggedUser.accountId).subscribe((res:number) => {
      this.totalAmount = res
     })

   }



}
