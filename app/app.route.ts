import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { FinanceComponent } from './finance/finance.component';
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


export const routes: Routes = [
  { path: '', component: DialogComponent, pathMatch: 'full' },
  { path: 'doughnut', component: DoughnutComponent, pathMatch: 'full' },
  { path: 'finance', component: FinanceComponent, pathMatch: 'full' },
  { path: 'pie', component: PieComponent, pathMatch: 'full' },
  { path: 'map', component: MapComponent, pathMatch: 'full' },
  { path: 'server', component: ServerComponent, pathMatch: 'full' },
  { path: 'toolbar', component: ToolbarComponent, pathMatch: 'full' },
  { path: 'databind', component: DatabindComponent, pathMatch: 'full' },
  { path: 'calender', component: CalenderComponent, pathMatch: 'full' },
  { path: 'sankey', component: SankeyComponent, pathMatch: 'full' },
  { path: 'image', component: ImageComponent, pathMatch: 'full' },
  { path: 'piemarker', component: PiemarkerComponent, pathMatch: 'full' },
  { path: 'action', component: ActionComponent, pathMatch: 'full' },
  { path: 'tooltip', component: TooltipComponent, pathMatch: 'full' },
  { path: 'event', component: EventComponent, pathMatch: 'full' }
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);
