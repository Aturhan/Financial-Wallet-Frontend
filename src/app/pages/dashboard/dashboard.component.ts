import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../core/model/api.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    constructor(private currencyService:CurrencyService){}
    currencyList:Currency[] = []

   ngOnInit(): void {
    this.fetchCurrencies()

   }

    fetchCurrencies(){
      this.currencyService.getAll().subscribe((data) =>{
        if(data){
          this.currencyList = data
        }

      })
    }
}
