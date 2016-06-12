import {Injectable} from 'angular2/core';
import {Resume} from './Resume';
import {Http,Response} from 'angular2/http'
@Injectable()
export class ResumeService{
    constructor(private _http:Http){
        
    }
    getResume(){
        return this._http.get("http://api.steve-botello.com/resume").map(r => r.json())
    }
}
