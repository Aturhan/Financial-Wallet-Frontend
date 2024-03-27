import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiResponse, Register } from '../../core/model/api.model';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatSelectModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router){}
    register:Register = new Register();


    registerForm:FormGroup = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(3)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required]),
      amount: new FormControl(0,[Validators.required])
    })





    onRegister(){
        this.register.name = this.registerForm.get("name").value
        this.register.email = this.registerForm.get('email').value
        this.register.password = this.registerForm.get('password').value
        this.register.amount = this.registerForm.get("amount").value
        console.log("amount: "+this.register.amount)
        console.log("email: "+this.register.email)
        this.userService.register(this.register).subscribe((res:ApiResponse)=>{
          if(res.result){
            alert(res.message)
            this.router.navigateByUrl('/login')
          }else{
            alert(res.message)
          }
        })
    }

}
