import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {  Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthRequest, AuthResponse } from '../../core/model/api.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    constructor(private authService:AuthService,private router:Router){}

    authRequest:AuthRequest = new AuthRequest();
    loginForm: FormGroup = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required])
    })

    onLogin(){
      this.authRequest.email = this.loginForm.get('email').value
      this.authRequest.password = this.loginForm.get('password').value
      console.log("email: "+this.authRequest.email)
        this.authService.login(this.authRequest).subscribe((response:AuthResponse) =>{
          console.log(response.token)
          if(response.result){
            alert(response.message)
            localStorage.setItem("user_data",JSON.stringify(response.userDto))
            localStorage.setItem("auth_token",response.token)
            this.router.navigateByUrl("/dashboard")
          }else{
            alert(response.message)
          }
        })
    }
}
