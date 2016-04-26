import {Component, Input} from 'angular2/core';

@Component({
    selector:'home',
    templateUrl:'app/home/home.html',
    styleUrls: ['app/home/home.css', 'app/shared/section.css']
})

export class HomeComponent{
    title= "Hello"
}