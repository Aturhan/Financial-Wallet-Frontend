import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountComponent } from './pages/account/account.component';
import { SpendingsComponent } from './pages/spendings/spendings.component';
import { authGuard } from './services/auth.guard';
import { AddSpendingComponent } from './pages/add-spending/add-spending.component';

export const routes: Routes = [

  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path:'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: '',
    component: LayoutComponent,
    canActivate:[authGuard],
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'spendings',
        component: SpendingsComponent
      },
      {
        path:  'add-spending',
        component: AddSpendingComponent
      }
    ]
  }
];
