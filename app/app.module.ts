import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './components/app/app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent }     from './components/heroes/heroes.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { HeroService }         from './services/hero.service';

import { routing } from './app.routing';
import {HeaderComponent} from "./fe-core/components/header/header.component";
import {DeepDiveNgModule} from "./webpages/deep-dive-page/deep-dive-ngmodule";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DeepDiveNgModule,

    routing,

  ],
  declarations: [
    AppComponent,

  ],
  providers: [
    HeroService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
