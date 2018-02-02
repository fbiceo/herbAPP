import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RestaurantPage } from '../restaurant/restaurant';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RestaurantPage;
  tab3Root = CartPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
