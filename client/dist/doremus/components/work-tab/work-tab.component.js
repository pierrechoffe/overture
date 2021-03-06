System.register(['@angular/core', '@angular/common', '@angular/router', '@angular2-material/toolbar/toolbar', '../../services/workSubDetail.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, toolbar_1, workSubDetail_service_1;
    var WorkTabComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (workSubDetail_service_1_1) {
                workSubDetail_service_1 = workSubDetail_service_1_1;
            }],
        execute: function() {
            WorkTabComponent = (function () {
                function WorkTabComponent(service, router) {
                    this.service = service;
                    this.router = router;
                    this.display = 'flex';
                    this.class = 'menu-icon icon-minus';
                    this.composed = 'Composed Of...';
                }
                WorkTabComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.getSubDetails().then(function (subDetails) { return _this.subDetails = subDetails; });
                };
                WorkTabComponent.prototype.showDetails = function () {
                    this.display = this.display.match('none') ? 'flex' : 'none';
                    this.class = this.display.match('none') ? 'menu-icon icon-plus' : 'menu-icon icon-minus';
                    this.composed = this.display.match('none') ? 'Composed Of...' : 'Composed Of';
                };
                WorkTabComponent.prototype.wip = function () {
                    this.router.navigate(['wip']);
                };
                WorkTabComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'work-tab',
                        inputs: ['display'],
                        templateUrl: 'work-tab.template.html',
                        directives: [toolbar_1.MdToolbar, router_1.ROUTER_DIRECTIVES, common_1.NgStyle, common_1.NgClass],
                        providers: [workSubDetail_service_1.WorkSubDetailService],
                    }), 
                    __metadata('design:paramtypes', [workSubDetail_service_1.WorkSubDetailService, router_1.Router])
                ], WorkTabComponent);
                return WorkTabComponent;
            }());
            exports_1("WorkTabComponent", WorkTabComponent);
        }
    }
});
