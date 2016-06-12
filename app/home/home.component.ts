import {Component, OnInit} from 'angular2/core';
import {HomeService} from './home.service';

@Component({
    selector:'home',
    templateUrl:'app/home/home.html',
    styleUrls: ['app/home/home.css', 'app/shared/section.css'],
    providers: [HomeService]
})

export class HomeComponent implements OnInit{
    content:any
    constructor(private _homeService : HomeService){
        this.content = "";
    }
    getPage(){        
        this._homeService.getHomePage().subscribe(
            r => this.content = new DOMParser().parseFromString(r, "text/html").body.firstChild, 
            error => this.content = error, 
            () => document.getElementById('content-begin').appendChild(this.content)
        );                
    }
    ngOnInit(){
        this.getPage();
    }
}