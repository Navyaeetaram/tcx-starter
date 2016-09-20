System.register(['@angular/core', '@angular/common', './global.ngmodule', "../webpages/syndicated-article-page/syndicated-article-page"], function(exports_1, context_1) {
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
    var core_1, common_1, global_ngmodule_1, syndicated_article_page_1;
    var SyndicatedArticleNgModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (global_ngmodule_1_1) {
                global_ngmodule_1 = global_ngmodule_1_1;
            },
            function (syndicated_article_page_1_1) {
                syndicated_article_page_1 = syndicated_article_page_1_1;
            }],
        execute: function() {
            SyndicatedArticleNgModule = (function () {
                function SyndicatedArticleNgModule() {
                }
                SyndicatedArticleNgModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, global_ngmodule_1.GlobalModule],
                        declarations: [
                            syndicated_article_page_1.SyndicatedArticlePage
                        ],
                        exports: [
                            syndicated_article_page_1.SyndicatedArticlePage
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SyndicatedArticleNgModule);
                return SyndicatedArticleNgModule;
            }());
            exports_1("SyndicatedArticleNgModule", SyndicatedArticleNgModule);
        }
    }
});
//# sourceMappingURL=syndicated-article.ngmodule.js.map