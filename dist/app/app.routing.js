System.register(['@angular/router', "./webpages/deep-dive-page/deep-dive-page", "./webpages/syndicated-article-page/syndicated-article-page"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, deep_dive_page_1, syndicated_article_page_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (deep_dive_page_1_1) {
                deep_dive_page_1 = deep_dive_page_1_1;
            },
            function (syndicated_article_page_1_1) {
                syndicated_article_page_1 = syndicated_article_page_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: 'deep-dive',
                    pathMatch: 'full'
                },
                {
                    path: 'deep-dive',
                    component: deep_dive_page_1.DeepDivePage
                },
                {
                    path: 'syndicated-article',
                    component: syndicated_article_page_1.SyndicatedArticlePage
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
