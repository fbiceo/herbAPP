import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { ProductService } from '../../app/services/product.service';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  category:String;
  items: any;
  constructor(public navCtrl: NavController, private navParams: NavParams, private productService:ProductService) {
    this.category = navParams.get('category');        
  }

  ngOnInit(){
    this.getProducts(this.category);
  }
  getProducts(category:String){
    
    this.productService.getPosts(category).subscribe(response =>{
        this.items = response;
    });
  }
}
