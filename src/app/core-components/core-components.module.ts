import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzTagModule} from "ng-zorro-antd/tag";
import { CardWikiComponent } from './card-wiki/card-wiki.component';
import {NzCardModule} from "ng-zorro-antd/card";
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzButtonModule} from "ng-zorro-antd/button";
import { CardAttributeComponent } from './card-attribute/card-attribute.component';
import {NzTypographyModule} from "ng-zorro-antd/typography";
@NgModule({
    declarations: [
        AutoCompleteComponent,
        CardWikiComponent,
        ModalConfirmComponent,
        CardAttributeComponent,
    ],
    exports: [
        AutoCompleteComponent,
        CardWikiComponent,
        ModalConfirmComponent,
        CardAttributeComponent
    ],
    imports: [
        CommonModule,
        NzInputModule,
        NzIconModule,
        NzToolTipModule,
        ReactiveFormsModule,
        FormsModule,
        NzAutocompleteModule,
        NzTagModule,
        NzCardModule,
        NzModalModule,
        NzButtonModule,
        NzTypographyModule
    ],
  providers: []
})
export class CoreComponentsModule { }
