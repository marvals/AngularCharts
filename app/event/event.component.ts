import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxLookupModule } from 'devextreme-angular';

import { Service, Employee } from './app.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [Service]
})
export class EventComponent {

  employees: Employee[];
  selectedEmployee: any;

  constructor(service: Service) {
      this.employees = service.getEmployees();
  }

  valueChanged(data) {
      this.selectedEmployee = data.value;
  }

  getDisplayExpr(item) {
      if (!item) {
          return '';
      }

      return item.FirstName + ' ' + item.LastName;
  }

}
