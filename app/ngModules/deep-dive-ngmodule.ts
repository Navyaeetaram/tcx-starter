import { NgModule } from '@angular/core';
import {DeepDivePage} from "../webpages/deep-dive-page/deep-dive-page";
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../fe-core/components/header/header.component";


@NgModule({
    imports:[CommonModule],
    declarations:[DeepDivePage,HeaderComponent],
    exports:[DeepDivePage],
})

export class DeepDiveNgModule{}
