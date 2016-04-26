import {Component, Input} from 'angular2/core';

@Component({
    selector:'resume',
    templateUrl:'app/resume/resume.html',
    styleUrls: ['app/resume/resume.css', 'app/shared/section.css']
})

export class ResumeComponent{    
    body= "This is the about page!"
}