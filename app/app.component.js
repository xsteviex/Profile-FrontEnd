"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var home_component_1 = require('./home/home.component');
var resume_component_1 = require('./resume/resume.component');
var projects_component_1 = require('./projects/projects.component');
var contact_component_1 = require('./contact/contact.component');
var router_1 = require('angular2/router');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Title';
        this.content = 'My Body';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
            styleUrls: ['app/app.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
            { path: '/resume', name: 'Resume', component: resume_component_1.ResumeComponent },
            { path: '/projects', name: 'Projects', component: projects_component_1.ProjectsComponent },
            { path: '/contact', name: 'Contact', component: contact_component_1.ContactComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map