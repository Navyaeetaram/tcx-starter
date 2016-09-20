import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeepDivePage} from "../webpages/deep-dive-page/deep-dive-page";
import {HeaderComponent} from "../fe-core/components/header/header.component";

@NgModule({
    imports:[CommonModule],
    declarations:[
      DeepDivePage,
      HeaderComponent
    ],
    exports:[DeepDivePage],
})

export class DeepDiveNgModule{}
