import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { CountryInfo, EnergyDescription, LineService } from './linechart.service';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'app-linechart',
    templateUrl: './linechart.component.html',
    styleUrls: ['./linechart.component.css'],
    providers: [LineService]
})
export class LinechartComponent {
    types: string[] = ['line', 'stackedline', 'fullstackedline'];
    countriesInfo: CountryInfo[];
    energySources: EnergyDescription[];

    constructor(service: LineService) {
        this.countriesInfo = service.getCountriesInfo();
        this.energySources = service.getEnergySources();
    }

    customizeTooltip(arg) {
        return {
            text: arg.valueText
        };
    }
}
