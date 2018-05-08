import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { ProductService } from '../../app/services/product.service';
import { MyApp } from '../../app/app.component';
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  category:String;
  items: any;
  imageRoot : any = MyApp.rootURL+"/upload/";
  constructor(public navCtrl: NavController, 
              private navParams: NavParams, 
              private productService:ProductService) {
    this.category = navParams.get('category');        
  }

  ngOnInit(){
    this.getProducts(this.category);
  }
  getProducts(category:String){
    
    this.productService.getPosts(category).subscribe(response =>{
        this.items = response;
        localStorage.setItem('productList',JSON.stringify(this.items));
    });
  }
  goDetail(id:string){
    this.navCtrl.push('ProductDetailPage',{id:id});
  }
  fetchImage(image:string){
    return this.imageRoot+image.split(',')[0];
  }
}
