import { Component } from '@angular/core';
import { LoggedUser } from '../../../../../task-management-FE/src/app/core/model/api.model';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    loggedUser:LoggedUser
    constructor(private authService:AuthService,private router:Router){
     const userData =  localStorage.getItem('user_data')
     if(userData != null){
       this.loggedUser = JSON.parse(userData)

     }
    }

    logout(){
      this.authService.logOut()
      localStorage.removeItem("user_data")
      this.router.navigateByUrl("login")
    }
}
