import {Injectable} from 'angular2/core';
import {Http,Response} from 'angular2/http'
@Injectable()
export class HomeService{
    constructor(private _http:Http){
        
    }
    getHomePage(){
        return this._http.get("http://api.steve-botello.com/home").map(r => r.text());
    }
}