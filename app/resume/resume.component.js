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
var resume_1 = require('./resume');
var resume_service_1 = require('./resume.service');
var ResumeComponent = (function () {
    function ResumeComponent(_resumeService) {
        this._resumeService = _resumeService;
        this.myResume = new resume_1.Resume();
    }
    ResumeComponent.prototype.getResume = function () {
        var _this = this;
        this._resumeService.getResume().then(function (r) { return _this.myResume = r; });
    };
    ResumeComponent.prototype.ngOnInit = function () {
        this.getResume();
    };
    ResumeComponent = __decorate([
        core_1.Component({
            selector: 'resume',
            templateUrl: 'app/resume/resume.html',
            styleUrls: ['app/resume/resume.css', 'app/shared/section.css'],
            providers: [resume_service_1.ResumeService]
        }), 
        __metadata('design:paramtypes', [resume_service_1.ResumeService])
    ], ResumeComponent);
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;
//# sourceMappingURL=resume.component.js.map