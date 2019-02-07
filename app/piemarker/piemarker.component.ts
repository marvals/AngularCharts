import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule } from 'devextreme-angular';

import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import { FeatureCollection, Service } from './app.service';

@Component({
  selector: 'app-piemarker',
  templateUrl: './piemarker.component.html',
  styleUrls: ['./piemarker.component.css'],
  providers: [ Service ]
})
export class PiemarkerComponent {

  worldMap: any = mapsData.world;
  markers: FeatureCollection;
  names: string[];

  constructor(service: Service) {
      this.markers = service.getMarkers();
      this.names = service.getNames();
      this.customizeText = this.customizeText.bind(this);
  }

  customizeText(arg) {
      return this.names[arg.index];
  }

  customizeTooltip(arg) {
      if (arg.layer.type === 'marker') {
          return {
              text: arg.attribute('tooltip')
          };
      }
  }

}
