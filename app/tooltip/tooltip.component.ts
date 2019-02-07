import { NgModule, Component, enableProdMode } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule, DxPieChartModule } from 'devextreme-angular';

import DxPieChart from 'devextreme/viz/pie_chart';
import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import { GdpInfo, Service } from './app.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  providers: [ Service ]
})
export class TooltipComponent {

  worldMap: any = mapsData.world;
  gdpData: Object;
  toolTipData: Object;
  pipe: any = new DecimalPipe('en-US');

  constructor(private service: Service) {
      this.gdpData = service.getCountriesGDP();
      this.customizeTooltip = this.customizeTooltip.bind(this);
      this.customizeLayers = this.customizeLayers.bind(this);
      this.tooltipShown = this.tooltipShown.bind(this);
  }

  customizeTooltip(arg) {
      const countryGDPData = this.gdpData[arg.attribute('name')];
      const total = countryGDPData && countryGDPData.total;
      const totalMarkupString = total ? '<div id=nominal >Nominal GDP: $' + total + 'M</div>' : '';
      const node = '<div #gdp><h4>' + arg.attribute('name') + '</h4>' +
          totalMarkupString +
          '<div id= gdp-sectors></div></div>';

      return {
          html: node
      };
  }

  customizeLayers(elements) {
      elements.forEach((element) => {
          const countryGDPData = this.gdpData[element.attribute('name')];
          element.attribute('total', countryGDPData && countryGDPData.total || 0);
      });
  }

  customizeText = (arg) => this.pipe.transform(arg.start, '1.0-0') + ' to ' + this.pipe.transform(arg.end, '1.0-0');

  tooltipShown(e) {
      const name = e.target.attribute('name'),
          gdpData: GdpInfo[] = this.gdpData[name] ? [
              { name: 'industry', value: this.gdpData[name].industry },
              { name: 'services', value: this.gdpData[name].services },
              { name: 'agriculture', value: this.gdpData[name].agriculture }
          ] : null,
          container = (<any> document).getElementById('gdp-sectors');

      if (gdpData) {
          new DxPieChart(container, this.service.getPieChartConfig(gdpData));
      } else {
          container.textContent = 'No economic development data';
      }
  }

}
