import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';
import {DeepDiveNgModule} from "./webpages/deep-dive-page/deep-dive-ngmodule";
import {DeepDivePage} from "./webpages/deep-dive-page/deep-dive-page";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DeepDivePage
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
