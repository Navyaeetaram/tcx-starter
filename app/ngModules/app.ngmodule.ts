import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from '../app.routing';

import { AppComponent }  from '../app-domain/app.component';
import {DeepDiveNgModule} from "../ngModules/deep-dive.ngmodule";
import {HeaderComponent} from "../fe-core/components/header/header.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    DeepDiveNgModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }