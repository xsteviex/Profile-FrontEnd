import {Component, OnInit} from 'angular2/core';
import {Resume} from './resume';
import {ResumeService} from './resume.service';

@Component({
    selector:'resume',
    templateUrl:'app/resume/resume.html',
    styleUrls: ['app/resume/resume.css', 'app/shared/section.css'],
    providers: [ResumeService]
})

export class ResumeComponent implements OnInit{
    test:string;
    myResume: Resume;
    constructor(private _resumeService : ResumeService){
        this.myResume = new Resume();
     }
    getResume(){
        this._resumeService.getResume().subscribe( r => this.myResume = r);
    }
    ngOnInit(){
        this.getResume();
    }
}