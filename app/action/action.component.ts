import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTileViewModule, DxButtonModule, DxListModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import { Service, Hotel } from './app.service';

@Component({
  selector: 'app-action',
  providers: [Service],
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  dataSource: DataSource;
  currentHotel: Hotel;

  listSelectionChanged = (e) => {
      this.currentHotel = e.addedItems[0];
  }

  constructor(service: Service) {
      this.dataSource = service.getDataSource();
      this.currentHotel = service.getFirstHotel();
  }
}
