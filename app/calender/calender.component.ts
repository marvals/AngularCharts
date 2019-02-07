import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSelectBoxModule,
         DxCheckBoxModule,
         DxDateBoxModule,
         DxCalendarModule,
         DxTemplateModule } from 'devextreme-angular';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {

  now: Date = new Date();
    currentValue: Date = new Date();
    firstDay = 0;
    minDateValue: Date = undefined;
    maxDateValue: Date = undefined;
    disabledDates: Function = null;
    zoomLevels: string[] = [
        'month', 'year', 'decade', 'century'
    ];
    cellTemplate = 'cell';
    holydays: any = [[1, 0], [4, 6], [25, 11]];
    isWeekend(date) {
        const day = date.getDay();

        return day === 0 || day === 6;
    }
    setMinDate(e) {
        if (e.value) {
            this.minDateValue = new Date(this.now.getTime() - 1000 * 60 * 60 * 24 * 3);
        } else {
            this.minDateValue = undefined;
        }
    }
    setMaxDate(e) {
        if (e.value) {
            this.maxDateValue = new Date(this.now.getTime() + 1000 * 60 * 60 * 24 * 3);
        } else {
            this.maxDateValue = undefined;
        }
    }
    disableWeekend(e) {
        if (e.value) {
            const that = this;
            that.disabledDates = function(data) {
                return data.view === 'month' && that.isWeekend(data.date);
            };
        } else {
            this.disabledDates = undefined;
        }
    }
    setFirstDay(e) {
        if (e.value) {
            this.firstDay = 1;
        } else {
            this.firstDay = 0;
        }
    }
    useCellTemplate(e) {
        if (e.value) {
            this.cellTemplate = 'custom';
        } else {
            this.cellTemplate = 'cell';
        }
    }
    getCellCssClass(date) {
        let cssClass = '';

        if (this.isWeekend(date)) {
            cssClass = 'weekend';
        }

        this.holydays.forEach(function(item) {
            if (date.getDate() === item[0] && date.getMonth() === item[1]) {
                cssClass = 'holyday';
                return false;
            }
        });

        return cssClass;
    }

}
