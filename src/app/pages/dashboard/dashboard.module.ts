import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";
import {NzIconModule} from "ng-zorro-antd/icon";
import {CoreComponentsModule} from "../../core-components/core-components.module";
import { TermTableComponent } from './dashboard/term-table/term-table.component';
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import { DataDictionaryComponent } from './dashboard/data-dictionary/data-dictionary.component';
import { PropertyManagementComponent } from './dashboard/property-management/property-management.component';
import {NzTypographyModule} from "ng-zorro-antd/typography";


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    TermTableComponent,
    DataDictionaryComponent,
    PropertyManagementComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NzSelectModule,
        FormsModule,
        NzIconModule,
        CoreComponentsModule,
        NzPaginationModule,
        NzTypographyModule
    ]
})
export class DashboardModule { }
