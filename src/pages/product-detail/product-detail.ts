import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../../app/services/product.service';
import { MyApp } from '../../app/app.component';
/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  id:any;
  productDetail : any;
  productList : any;
  productImages : any;
  imageRoot : any = MyApp.rootURL+"/upload/";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private productService:ProductService) {
    this.id = navParams.get('id');
    this.productList = JSON.parse(localStorage.getItem('productList'));
    this.productList.forEach(element => {
      if(element.id == this.id){
        this.productDetail = element;
        this.productImages = element.product10.split(',');
      }
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');

      
  }

}
