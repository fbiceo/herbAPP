import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{
    http:any;
    baseUrl: String;

    constructor(http:Http ){
        this.http = http;
        this.baseUrl = 'http://health.ccg.tw/api/';
    }

    getPosts(category){                
        return this.http.get(this.baseUrl+'get_products_by_category/'+category)
            .map(res=>res.json());
    }
}