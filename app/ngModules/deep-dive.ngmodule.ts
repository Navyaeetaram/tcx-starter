import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalNgModule } from './global.ngmodule';
import { DeepDivePage } from "../webpages/deep-dive-page/deep-dive-page";

@NgModule({
    imports:[
      CommonModule,
      GlobalNgModule
    ],
    declarations:[
      DeepDivePage,
    ],
    exports:[
      DeepDivePage
    ],
})

export class DeepDiveNgModule{}
