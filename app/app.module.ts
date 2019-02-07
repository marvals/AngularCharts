import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxTreeListModule } from 'devextreme-angular';
import { DxChartModule, DxSelectBoxModule, DxDataGridModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { RoutesModule } from './app.route';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { DxPieChartModule } from 'devextreme-angular';
import { FinanceComponent } from './finance/finance.component';
import { DxTemplateModule, DxButtonModule, DxPopupModule, DxPopoverModule, DxVectorMapModule,
  DxTileViewModule, DxListModule, DxBarGaugeModule, DxSankeyModule, DxCalendarModule, DxDateBoxModule,
  DxCheckBoxModule, DxLookupModule } from 'devextreme-angular';
import { PieComponent } from './pie/pie.component';
import { MapComponent } from './map/map.component';
import { ActionComponent } from './action/action.component';
import { ServerComponent } from './server/server.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DatabindComponent } from './databind/databind.component';
import { SankeyComponent } from './sankey/sankey.component';
import { CalenderComponent } from './calender/calender.component';
import { EventComponent } from './event/event.component';
import { ImageComponent } from './image/image.component';
import { PiemarkerComponent } from './piemarker/piemarker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DialogComponent } from './dialog/dialog.component';
import { RtComponent } from './rt/rt.component';

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    DoughnutComponent,
    FinanceComponent,
    PieComponent,
    MapComponent,
    ActionComponent,
    ServerComponent,
    ToolbarComponent,
    DatabindComponent,
    SankeyComponent,
    CalenderComponent,
    EventComponent,
    ImageComponent,
    PiemarkerComponent,
    TooltipComponent,
    DialogComponent,
    RtComponent
  ],
  imports: [
    BrowserModule,
    DxChartModule,
    RoutesModule,
    DxSelectBoxModule,
    DxVectorMapModule,
    DxPieChartModule,
    DxCheckBoxModule,
    DxLookupModule,
    DxCalendarModule,
    DxDateBoxModule,
    DxDataGridModule,
    DxTemplateModule,
    DxButtonModule,
    DxTileViewModule,
    DxListModule,
    DxPopupModule,
    DxBarGaugeModule,
    DxSankeyModule,
    DxSelectBoxModule,
    DxPopoverModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
