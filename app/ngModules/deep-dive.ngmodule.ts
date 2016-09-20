import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeepDivePage } from "../webpages/deep-dive-page/deep-dive-page";
import {GlobalModule} from "./global.ngmodule";


@NgModule({
    imports:[CommonModule,GlobalModule],
    declarations:[
      DeepDivePage,

    ],
    exports:[DeepDivePage],
})

export class DeepDiveNgModule{}
