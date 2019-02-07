import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxChartModule } from 'devextreme-angular';

import { StockPrice, Service } from './app.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css'],
  providers: [Service]
})
export class FinanceComponent {

  stockPrices: StockPrice[];

  constructor(service: Service) {
      this.stockPrices = service.getStockPrices();
  }
  customizeTooltip(arg) {
      return {
          text: 'Open: $' + arg.openValue + '<br/>' +
              'Close: $' + arg.closeValue + '<br/>' +
              'High: $' + arg.highValue + '<br/>' +
              'Low: $' + arg.lowValue + '<br/>'
      };
  }
}
