import {Injectable} from 'angular2/core';
import {Resume} from './Resume';
import {MyResume} from './mock-resume';

@Injectable()
export class ResumeService{
    getResume(){
        return Promise.resolve(MyResume);
    }
}
