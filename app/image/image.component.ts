import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule } from 'devextreme-angular';

import * as mapsData from 'devextreme/dist/js/vectormap-data/usa.js';
import { FeatureCollection, Service } from './app.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers: [ Service ]
})
export class ImageComponent {

  usaMap: any = mapsData.usa;
  weather: FeatureCollection;

  constructor(service: Service) {
      this.weather = service.getWeatherData();
  }

}
