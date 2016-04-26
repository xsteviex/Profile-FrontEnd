import {Component} from 'angular2/core';
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/app.css'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/home', name:'Home', component: HomeComponent, useAsDefault:true},
    {path: '/resume', name:'Resume', component: ResumeComponent},
    {path: '/projects', name:'Projects', component: ProjectsComponent},
    {path: '/contact', name:'Contact', component: ContactComponent}    
])

export class AppComponent {
    title = 'My Title';
    content = 'My Body';
}
