import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoggedUser } from '../../../../../task-management-FE/src/app/core/model/api.model';
import { CreateSpendingReq, CreateSpendRes } from '../../core/model/api.model';
import { SpendingsService } from '../../services/spendings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-spending',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-spending.component.html',
  styleUrl: './add-spending.component.scss'
})
export class AddSpendingComponent {
  loggedUser:LoggedUser
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
            this.createSpendForm.reset()
          }else{
            alert(res.message)
          }
        })
    }
}
