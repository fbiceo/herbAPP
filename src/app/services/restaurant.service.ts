import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService{
    http:any;
    baseUrl: String;

    constructor(http:Http ){
        this.http = http;
        this.baseUrl = 'http://health.ccg.tw/api/';
    }

    getPosts(){                
        return this.http.get(this.baseUrl+'get_restaurants')
            .map(res=>res.json());
    }
}