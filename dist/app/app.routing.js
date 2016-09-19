"use strict";
var router_1 = require('@angular/router');
var deep_dive_page_1 = require("./webpages/deep-dive-page/deep-dive-page");
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: deep_dive_page_1.DeepDivePage
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
