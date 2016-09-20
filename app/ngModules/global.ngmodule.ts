import { NgModule }from '@angular/core';




import { HeaderComponent } from "../fe-core/components/header/header.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports:[
        HeaderComponent
    ]


})
export class GlobalModule { }
