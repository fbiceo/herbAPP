import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantService } from '../../app/services/restaurant.service';

@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantPage {
  items: any;
  constructor(public navCtrl: NavController, private restaurantService:RestaurantService) {

  }
  ngOnInit(){
    this.getRestaurants();
  }
  getRestaurants(){    
    this.restaurantService.getPosts().subscribe(response =>{
      this.items = response;       
    });
  }
}
