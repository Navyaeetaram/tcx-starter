System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '../app.routing', '../app-domain/app.component', "../ngModules/deep-dive.ngmodule", "../ngModules/syndicated-article.ngmodule", "./global.ngmodule"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, app_routing_1, app_component_1, deep_dive_ngmodule_1, syndicated_article_ngmodule_1, global_ngmodule_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (deep_dive_ngmodule_1_1) {
                deep_dive_ngmodule_1 = deep_dive_ngmodule_1_1;
            },
            function (syndicated_article_ngmodule_1_1) {
                syndicated_article_ngmodule_1 = syndicated_article_ngmodule_1_1;
            },
            function (global_ngmodule_1_1) {
                global_ngmodule_1 = global_ngmodule_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            app_routing_1.routing,
                            global_ngmodule_1.GlobalNgModule,
                            deep_dive_ngmodule_1.DeepDiveNgModule,
                            syndicated_article_ngmodule_1.SyndicatedArticleNgModule
                        ],
                        declarations: [
                            app_component_1.AppComponent
                        ],
                        providers: [],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
