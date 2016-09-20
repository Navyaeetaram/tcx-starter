import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from '../app.routing';

import { AppComponent }  from '../app-domain/app.component';
import { DeepDiveNgModule } from "../ngModules/deep-dive.ngmodule";
import { SyndicatedArticleNgModule } from "../ngModules/syndicated-article.ngmodule";
import { GlobalNgModule } from "./global.ngmodule";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    GlobalNgModule,
    DeepDiveNgModule,
    SyndicatedArticleNgModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
