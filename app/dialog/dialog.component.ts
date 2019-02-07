import { NgModule, Component, enableProdMode } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTemplateModule, DxButtonModule, DxPopupModule, DxPopoverModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Service, House } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [Service]
})
export class DialogComponent {
  houses: House[];
  currentHouse: House;
  popupVisible = false;
  ADD_TO_FAVORITES = 'Add to Favorites';
  REMOVE_FROM_FAVORITES = 'Remove from Favorites';

  constructor(service: Service) {
      this.houses = service.getHouses();
      this.currentHouse = this.houses[0];
  }

  showHouse(house: House) {
      this.currentHouse = house;
      this.popupVisible = true;
  }

  changeFavoriteState() {
      const favoriteState = !this.currentHouse.Favorite;
      const message = 'This item has been '
              + (favoriteState ? 'added to' : 'removed from')
              + ' the Favorites list!';
      this.currentHouse.Favorite = favoriteState;

      notify({
          message: message,
          width: 450
      },
      favoriteState ? 'success' : 'error',
      2000);
  }

}
