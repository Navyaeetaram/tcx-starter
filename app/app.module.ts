import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './components/app/app.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';

import { routing } from './app.routing';
import {HeaderComponent} from "./fe-core/components/header/header.component";
import {DeepDiveNgModule} from "./ngModules/deep-dive-ngmodule";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DeepDiveNgModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
