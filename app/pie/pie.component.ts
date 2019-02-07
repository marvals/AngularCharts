import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPieChartModule } from 'devextreme-angular';
import { Area, Service } from './app.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
  providers: [Service]
})
export class PieComponent {

  areas: Area[];

  constructor(service: Service) {
      this.areas = service.getAreas();
  }

  pointClickHandler(e) {
      this.toggleVisibility(e.target);
  }

  legendClickHandler (e) {
      const arg = e.target,
          item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

      this.toggleVisibility(item);
  }

  toggleVisibility(item) {
      if (item.isVisible()) {
          item.hide();
      } else {
          item.show();
      }
  }

}
