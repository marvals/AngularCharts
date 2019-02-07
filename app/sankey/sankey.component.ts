import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSankeyModule } from 'devextreme-angular';

import { Service, DataItem } from './app.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
  selector: 'app-sankey',
  templateUrl: './sankey.component.html',
  providers: [Service],
  styleUrls: ['./sankey.component.css']
})
export class SankeyComponent {

  data: DataItem[];

  constructor(service: Service) {
      this.data = service.getData();
  }

  customizeLinkTooltip(info: any) {
      return {
          html: `<b>From:</b> ${info.source}<br/><b>To:</b> ${info.target}<br/><b>Weight:</b> ${info.weight}`
      };
  }

}
