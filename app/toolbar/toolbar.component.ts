import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule,
         DxDataGridComponent,
         DxTemplateModule } from 'devextreme-angular';
import { Service, Order } from './app.service';

import query from 'devextreme/data/query';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [Service]
})
export class ToolbarComponent {

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  orders: Order[];
  expanded = true;
  totalCount: number;

  constructor(service: Service) {
      this.orders = service.getOrders();
      this.totalCount = this.getGroupCount('CustomerStoreState');
  }

  getGroupCount(groupField) {
      return query(this.orders)
          .groupBy(groupField)
          .toArray().length;
  }

  onToolbarPreparing(e) {
      e.toolbarOptions.items.unshift({
          location: 'before',
          template: 'totalGroupCount'
      }, {
              location: 'before',
              widget: 'dxSelectBox',
              options: {
                  width: 200,
                  items: [{
                      value: 'CustomerStoreState',
                      text: 'Grouping by State'
                  }, {
                      value: 'Employee',
                      text: 'Grouping by Employee'
                  }],
                  displayExpr: 'text',
                  valueExpr: 'value',
                  value: 'CustomerStoreState',
                  onValueChanged: this.groupChanged.bind(this)
              }
          }, {
              location: 'before',
              widget: 'dxButton',
              options: {
                  width: 136,
                  text: 'Collapse All',
                  onClick: this.collapseAllClick.bind(this)
              }
          }, {
              location: 'after',
              widget: 'dxButton',
              options: {
                  icon: 'refresh',
                  onClick: this.refreshDataGrid.bind(this)
              }
          });
  }

  groupChanged(e) {
      this.dataGrid.instance.clearGrouping();
      this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
      this.totalCount = this.getGroupCount(e.value);
  }

  collapseAllClick(e) {
      this.expanded = !this.expanded;
      e.component.option({
          text: this.expanded ? 'Collapse All' : 'Expand All'
      });
  }

  refreshDataGrid() {
      this.dataGrid.instance.refresh();
  }

}
