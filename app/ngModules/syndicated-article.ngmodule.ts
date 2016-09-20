import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalNgModule } from './global.ngmodule';
import { SyndicatedArticlePage } from "../webpages/syndicated-article-page/syndicated-article-page";

@NgModule({
    imports:[CommonModule, GlobalNgModule],
    declarations:[
      SyndicatedArticlePage
    ],
    exports:[
      SyndicatedArticlePage
    ]
})

export class SyndicatedArticleNgModule{}
