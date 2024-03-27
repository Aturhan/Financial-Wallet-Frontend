import { Component } from '@angular/core';
import { SpendingsService } from '../../services/spendings.service';
import { LoggedUser } from '../../../../../task-management-FE/src/app/core/model/api.model';
import { CreateSpendingReq, SpendDto, CreateSpendRes } from '../../core/model/api.model';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-spendings',
  standalone: true,
  imports: [NgClass,CommonModule,ReactiveFormsModule,CurrencyPipe],
  templateUrl: './spendings.component.html',
  styleUrl: './spendings.component.scss'
})
export class SpendingsComponent {
  loggedUser:LoggedUser
  spendList: SpendDto[]
  createSpendingReq:CreateSpendingReq = new CreateSpendingReq()
  constructor(private spendService:SpendingsService){
      const userData =  localStorage.getItem('user_data')
      if(userData != null){
        this.loggedUser = JSON.parse(userData)
      }
    }


    createSpendForm: FormGroup = new FormGroup({
      title: new FormControl("",[Validators.required]),
      spendType: new FormControl(""),
      amount: new FormControl("",[Validators.required])
    })

    onSave(){
        this.createSpendingReq.title = this.createSpendForm.get("title").value
        this.createSpendingReq.spendType = this.createSpendForm.get("spendType").value
        this.createSpendingReq.accountId = this.loggedUser.accountId
        this.createSpendingReq.amount = this.createSpendForm.get("amount").value

        this.spendService.save(this.createSpendingReq).subscribe((res:CreateSpendRes) =>{
          if(res.result){
            alert(res.message)
            this.getAllSpends()
          }else{
            alert(res.message)
          }
        })
    }




    ngOnInit(): void {
      this.getAllSpends();
    }

    getAllSpends(){
        this.spendService.getAllSpends(this.loggedUser.accountId).subscribe((response:any) =>{
          this.spendList = response
        })
    }
}
