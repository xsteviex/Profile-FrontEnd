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
var home_service_1 = require('./home.service');
var HomeComponent = (function () {
    function HomeComponent(_homeService) {
        this._homeService = _homeService;
        this.content = "";
    }
    HomeComponent.prototype.getPage = function () {
        var _this = this;
        this._homeService.getHomePage().subscribe(function (r) { return _this.content = new DOMParser().parseFromString(r, "text/html").body.firstChild; }, function (error) { return _this.content = error; }, function () { return document.getElementById('content-begin').appendChild(_this.content); });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/home/home.html',
            styleUrls: ['app/home/home.css', 'app/shared/section.css'],
            providers: [home_service_1.HomeService]
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map